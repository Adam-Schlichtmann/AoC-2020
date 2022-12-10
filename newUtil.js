const fs = require("fs");

if (process.argv.length < 4) {
  console.warn("Usage: node newUtil.js <folderName> <fileNames>");
  console.warn(
    "Example: node newUtil.js src/screens/Receiving/SpecifyCommit myFunction myUtil"
  );
  process.exit(1);
}

const addToIndex = (baseDir, file) => {
  const contents = fs.existsSync(`${baseDir}/index.ts`)
    ? fs.readFileSync(`${baseDir}/index.ts`)
    : "";

  const newContents = [
    ...contents.toString().split("\n"),
    `export { default as ${file} } from './${file}';`,
  ]
    .sort((a, b) => a.localeCompare(b))
    .filter((a, i, arr) => !!a && arr.findIndex((b) => b === a) === i)
    .join("\n");
  fs.writeFileSync(`${baseDir}/index.ts`, `${newContents}\n`);
};

(async () => {
  const baseDir = process.argv[2].replace(/\/$/, "");
  process.argv.slice(3).forEach((file) => {
    if (fs.existsSync(`${baseDir}/${file}/${file}.ts`)) {
      return;
    }
    // New folder, plus __tests__ folder inside
    fs.mkdirSync(`${baseDir}/${file}/__tests__`, {
      recursive: true,
    });
    // Actual file with function
    fs.writeFileSync(
      `${baseDir}/${file}/${file}.ts`,
      "export default () => {};\n"
    );
    // index file
    fs.writeFileSync(
      `${baseDir}/${file}/index.ts`,
      `export { default } from './${file}';\n`
    );
    // Default test file
    fs.writeFileSync(
      `${baseDir}/${file}/__tests__/${file}.test.ts`,
      `import ${file} from '../${file}';\nimport test from 'ava';\n\ntest('${file} tests', async t => {
        t.is(${file}(), 'oracle');
      });`
    );
    addToIndex(baseDir, file);
  });
})();
