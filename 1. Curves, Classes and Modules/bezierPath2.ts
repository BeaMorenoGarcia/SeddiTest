import { BezierCurve } from "./bezierCurve2";
import { Point } from "./point";

class BezierPath2 {
    points: Point[];

    constructor (points: Point[]) {
        this.points = points;
    }

    getSegment(index: number, init?: number) {
        if(!init) init = 0;
        if(init + index > this.points.length) throw new Error('Parámetros no válidos')
        return new BezierCurve(this.points.slice(init, init+index));
    }
}

export { BezierPath2 as BezierPath }