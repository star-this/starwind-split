// sw-split.js
import {
  createStarwindElement,
  defineElement,
} from "./starwind.elements.util.js";

const SwSplitLayout = createStarwindElement({
  gap: { var: "--sw-split-gap", type: "space" },
  min: { var: "--sw-split-min", type: "space" },
});

export function defineSwSplit() {
  defineElement("sw-split", SwSplitLayout);
}
