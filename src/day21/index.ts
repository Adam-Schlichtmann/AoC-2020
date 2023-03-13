import fs from "fs";

type Recipe = {
  ingredients: string[];
  allergens: string[];
};

type Possible = {
  name: string;
  possible: string[];
};

const part1 = () => {
  console.log("DAY 21 Part 1");

  const allFileContents = fs.readFileSync("./src/day21/input.txt", "utf-8");
  const recipes = allFileContents
    .split(/\r?\n/)
    .filter((f) => !!f)
    .map<Recipe>((line) => {
      const [ingredients, allergens] = line.split("(contains");
      return {
        ingredients: ingredients.trim().split(" "),
        allergens: allergens
          .replace(/\)/g, "")
          .replace(/,/g, "")
          .trim()
          .split(" "),
      };
    });

  const allIngredients = Array.from(
    new Set(
      recipes.reduce<string[]>((acc, item) => [...acc, ...item.ingredients], [])
    )
  );

  const allAllergens = Array.from(
    new Set(
      recipes.reduce<string[]>((acc, item) => [...acc, ...item.allergens], [])
    )
  );

  const lonelyIngredients = allIngredients.filter((x) =>
    allAllergens.every((y) => {
      const allergenYRecipes = recipes.filter((r) => r.allergens.includes(y));
      return allergenYRecipes.some((r) => !r.ingredients.includes(x));
    })
  );

  console.log(
    recipes.reduce((acc, item) => {
      return (
        acc +
        item.ingredients.filter((i) => lonelyIngredients.includes(i)).length
      );
    }, 0)
  );
};

const part2 = () => {
  console.log("DAY 21 Part 2");

  const allFileContents = fs.readFileSync("./src/day21/input.txt", "utf-8");
  const recipes = allFileContents
    .split(/\r?\n/)
    .filter((f) => !!f)
    .map<Recipe>((line) => {
      const [ingredients, allergens] = line.split("(contains");
      return {
        ingredients: ingredients.trim().split(" "),
        allergens: allergens
          .replace(/\)/g, "")
          .replace(/,/g, "")
          .trim()
          .split(" "),
      };
    });

  const allAllergens = Array.from(
    new Set(
      recipes.reduce<string[]>((acc, item) => [...acc, ...item.allergens], [])
    )
  );

  let result = allAllergens
    .map<Possible>((allergen) => {
      const matchingRecipes = recipes.filter((r) =>
        r.allergens.includes(allergen)
      );
      const allIngredients = Array.from(
        new Set(matchingRecipes.map((m) => m.ingredients).flat())
      );
      const likely = allIngredients.filter((ing) =>
        matchingRecipes.every((m) => m.ingredients.includes(ing))
      );

      return {
        name: allergen,
        possible: likely,
      };
    })
    .sort((a, b) => (a.possible.length < b.possible.length ? -1 : 1));

  const complete: string[] = [];
  while (complete.length < result.length) {
    const current = result.find(
      (r) => r.possible.length === 1 && !complete.includes(r.name)
    );
    if (!current) {
      console.log("Error current cannot be found");
      return;
    }
    complete.push(current.name);
    result = result.map((r) => ({
      ...r,
      possible:
        r.name === current.name
          ? r.possible
          : r.possible.filter((p) => p !== current.possible[0]),
    }));
  }

  console.log(
    result
      .sort((a, b) => (a.name < b.name ? -1 : 1))
      .map((item) => item.possible[0])
      .join(",")
  );
};

export default () => {
  part1();
  part2();
};
