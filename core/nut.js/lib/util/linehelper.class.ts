import { Point } from "@nut-tree-macpad/shared";

import { Bresenham } from "./bresenham.class";

export class LineHelper {
  constructor() {}

  public straightLine(from: Point, to: Point): Point[] {
    return Bresenham.compute(from, to);
  }
}
