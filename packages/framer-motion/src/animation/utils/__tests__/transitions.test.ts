import { isTransitionDefined, isZero } from "../transitions"

describe("isTransitionDefined", () => {
    test("Detects a transition", () => {
        expect(isTransitionDefined({})).toBe(false)
        expect(isTransitionDefined({ when: "beforeChildren" })).toBe(false)
        expect(isTransitionDefined({ delay: 0 })).toBe(false)
        expect(isTransitionDefined({ elapsed: 0 })).toBe(false)
        expect(isTransitionDefined({ duration: 1 })).toBe(true)
        expect(isTransitionDefined({ delay: 0, duration: 1 })).toBe(true)
        expect(isTransitionDefined({ type: "tween" })).toBe(true)
        expect(isTransitionDefined({ ease: "linear" })).toBe(true)
    })
})

describe("isZero", () => {
    test("correctly detects zero values", () => {
        expect(isZero(0)).toBe(true)
        expect(isZero("0px")).toBe(true)
        expect(isZero("0rem")).toBe(true)
        expect(isZero("4rem")).toBe(false)
        expect(isZero(5)).toBe(false)
        expect(isZero("#000")).toBe(false)
        expect(isZero("5%")).toBe(false)
        expect(isZero("0px 0px")).toBe(false)
    })
})
