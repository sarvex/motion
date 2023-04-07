export var identityProjection2d = "translate(0px, 0px) scale(1, 1)";
export var identityProjection3d = "translate3d(0px, 0px, 0) scale(1, 1)";
export function buildProjectionTransform(delta, treeScale, latestTransform) {
    /**
     * The translations we use to calculate are always relative to the viewport coordinate space.
     * But when we apply scales, we also scale the coordinate space of an element and its children.
     * For instance if we have a treeScale (the culmination of all parent scales) of 0.5 and we need
     * to move an element 100 pixels, we actually need to move it 200 in within that scaled space.
     */
    var xTranslate = delta.x.translate / treeScale.x;
    var yTranslate = delta.y.translate / treeScale.y;
    var transform = "translate(".concat(xTranslate, "px, ").concat(yTranslate, "px) ");
    if (latestTransform) {
        var rotate = latestTransform.rotate, rotateX = latestTransform.rotateX, rotateY = latestTransform.rotateY;
        if (rotate)
            transform += "rotate(".concat(rotate, "deg) ");
        if (rotateX)
            transform += "rotateX(".concat(rotateX, "deg) ");
        if (rotateY)
            transform += "rotateY(".concat(rotateY, "deg) ");
    }
    transform += "scale(".concat(delta.x.scale, ", ").concat(delta.y.scale, ")");
    return transform === identityProjection3d || transform === identityProjection2d ? "none" : transform;
}
//# sourceMappingURL=transform.js.map