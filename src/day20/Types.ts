export type Tile = {
  id: number;
  /**
   * Ordered as top, right, bottom, left
   */
  sides: string[];
  tile: string[];
  // Id mapped to matching side
  neighbors: number[];
};

export type Tile2 = {
  id: number;
  tile: string[];
};
