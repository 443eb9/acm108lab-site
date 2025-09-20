export function lerp(x: number, y: number, t: number) {
    return x * (1 - t) + y * t
}
