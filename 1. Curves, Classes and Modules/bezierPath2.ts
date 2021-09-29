import { BezierCurve } from "./bezierCurve2";

class BezierPath2 {
    curves: BezierCurve[];

    constructor (curves: BezierCurve[]) {
        this.curves = curves;
    }

    getSegment(index: number) {
        return this.curves[index];
    }
}

export {BezierPath2 as BezierPath}