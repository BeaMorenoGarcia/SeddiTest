import { Point } from "./point";

function binomial(n: number, k: number): number {
    var coeff = 1;
    for (var x = n-k+1; x <= n; x++) coeff *= x;
    for (x = 1; x <= k; x++) coeff /= x;
    return coeff;
}

class BezierCurve2{
  order: number;
  points: Point[];

  constructor(points: Point[]) {
    this.order = points.length-1;
    this.points = points
  }
 
  eval(t: number) {
    if(t<0 || t>1) throw new Error('t parameter must be a number between 0 to 1 (both included)')
    let point: Point = new Point(0,0);
    let bezierCoeff: number;
    this.points.forEach((point, i) => {
      bezierCoeff = binomial(this.order, i)*(Math.pow(t,i))*(Math.pow((1-t),(this.order-i)));
      point.x += point.x*bezierCoeff;
      point.y += point.y*bezierCoeff;
    })
    return point;
  }

  ecuacion() {
    var t;
    let point: Point = new Point(0,0);
    let bezierCoeff: number;
    this.points.forEach((point, i) => {
      bezierCoeff = binomial(this.order, i)*(Math.pow(t,i))*(Math.pow((1-t),(this.order-i)));
      point.x += point.x*bezierCoeff;
      point.y += point.y*bezierCoeff;
    })
  }
}

export { BezierCurve2 as BezierCurve};