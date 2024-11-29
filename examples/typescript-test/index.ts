import { Region, screen } from "@nut-tree-macpad/nut-js";

(async () => {
  await screen.highlight(new Region(100, 200, 300, 400));
})();
