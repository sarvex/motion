import { useFrame } from "@react-three/fiber";
import { useMotionValue } from "../../../value/use-motion-value";
export function useTime() {
    var time = useMotionValue(0);
    useFrame(function (state) { return time.set(state.clock.getElapsedTime()); });
    return time;
}
//# sourceMappingURL=use-time.js.map