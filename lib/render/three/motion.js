import { __assign } from "tslib";
import { createMotionComponent } from "../../motion";
import { animations } from "../../motion/features/animations";
import { makeUseVisualState } from "../../motion/utils/use-visual-state";
import { useRender } from "./use-render";
import { createVisualElement, createRenderState } from "./create-visual-element";
import { scrapeMotionValuesFromProps } from "./utils/scrape-motion-value";
var useVisualState = makeUseVisualState({
    scrapeMotionValuesFromProps: scrapeMotionValuesFromProps,
    createRenderState: createRenderState,
});
var preloadedFeatures = __assign({}, animations);
function custom(Component) {
    return createMotionComponent({
        Component: Component,
        preloadedFeatures: preloadedFeatures,
        useRender: useRender,
        useVisualState: useVisualState,
        createVisualElement: createVisualElement,
    });
}
var componentCache = new Map();
export var motion = new Proxy(custom, {
    get: function (_, key) {
        !componentCache.has(key) && componentCache.set(key, custom(key));
        return componentCache.get(key);
    },
});
//# sourceMappingURL=motion.js.map