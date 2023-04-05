import { t1427, t1951, tile3079, tiles } from "../../tile.testdata";
import matchSideToTile from "../matchSideToTile";
import test from "ava";

test("matchSideToTile tests", async (t) => {
  t.deepEqual(matchSideToTile(t1951, tiles), [2729, 2311, -1, -1]);
  t.deepEqual(matchSideToTile(t1427, tiles), [1489, 2473, 2311, 2729]);
});
