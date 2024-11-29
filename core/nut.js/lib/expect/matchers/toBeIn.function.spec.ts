import { mouse } from "../../../index";
import { Point, Region } from "@nut-tree-macpad/shared";
import { toBeIn } from "./toBeIn.function";

const targetPoint = new Point(400, 400);

describe(".toBeIn", () => {
  it("should succeed when cursor is within correct region.", async () => {
    const targetRegion = new Region(350, 350, 100, 100);
    mouse.getPosition = jest.fn(() => Promise.resolve(targetPoint));
    const result = await toBeIn(mouse, targetRegion);
    expect(result.pass).toBeTruthy();
  });

  it("should fail when cursor is outside of search region.", async () => {
    const targetRegion = new Region(0, 0, 100, 100);
    mouse.getPosition = jest.fn(() => Promise.resolve(targetPoint));
    const result = await toBeIn(mouse, targetRegion);
    expect(result.pass).toBeFalsy();
  });
});
