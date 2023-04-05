import {
  t2311,
  t1951,
  t1171,
  t1427,
  t1489,
  t2473,
  t2971,
  t2729,
  tile3079,
} from "../../tile.testdata";
import getCornerTile from "../getCornerTile";
import test from "ava";

test("getCornerTile tests", async (t) => {
  t.deepEqual(
    getCornerTile([
      t2311,
      t1951,
      t1171,
      t1427,
      t1489,
      t2473,
      t2971,
      t2729,
      tile3079,
    ]),
    t1951
  );

  t.deepEqual(
    getCornerTile([
      t2311,
      t1427,
      t1489,
      t2473,
      t1171,
      t2971,
      t2729,
      t1951,
      tile3079,
    ]),
    t1171
  );
});
