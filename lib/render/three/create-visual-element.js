import { __rest } from "tslib";
import { visualElement } from "../";
import { createBox } from "../../projection/geometry/models";
import { checkTargetForNewValues } from "../utils/setters";
import { setThreeValue } from "./utils/set-value";
import { readThreeValue } from "./utils/read-value";
import { scrapeMotionValuesFromProps } from "./utils/scrape-motion-value";
export var createRenderState = function () { return ({}); };
export var threeVisualElement = visualElement({
    treeType: "three",
    readValueFromInstance: readThreeValue,
    getBaseTarget: function () {
        return undefined;
    },
    sortNodePosition: function (a, b) {
        return a.id - b.id;
    },
    makeTargetAnimatable: function (element, _a) {
        var transition = _a.transition, target = __rest(_a, ["transition"]);
        checkTargetForNewValues(element, target, {});
        return target;
    },
    restoreTransform: function () { },
    resetTransform: function () { },
    removeValueFromRenderState: function (_key, _renderState) { },
    measureViewportBox: createBox,
    scrapeMotionValuesFromProps: scrapeMotionValuesFromProps,
    build: function (_element, state, latestValues) {
        for (var key in latestValues) {
            state[key] = latestValues[key];
        }
    },
    render: function (instance, renderState) {
        for (var key in renderState) {
            setThreeValue(instance, key, renderState);
        }
    },
});
export var createVisualElement = function (_, options) {
    return threeVisualElement(options);
};
//# sourceMappingURL=create-visual-element.js.map