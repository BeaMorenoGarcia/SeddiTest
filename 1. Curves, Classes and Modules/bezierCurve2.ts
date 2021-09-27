function binomial(n: number, k: number): number {
    var coeff = 1;
    for (var x = n-k+1; x <= n; x++) coeff *= x;
    for (x = 1; x <= k; x++) coeff /= x;
    return coeff;
}

class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

class BezierCurve2{
  order: number;
  points: Point[];

  constructor(order: number, init: Point, finish: Point, control: Point[]) {
    if(order+1 !== control.length+2) throw new Error('Incorrect number of control points');
    this.order = order;
    let points: Point[] = [];
    this.points = points.concat([init], control, [finish]);
  }
 
  eval(t: number) {
    if(t<0 || t>1) throw new Error('t parameter must be a number between 0 to 1 (both included)')
    let point: Point = new Point(0,0);
    let bezierCoeff: number;
    for(let i=0; i<this.order+1;i++) {
      bezierCoeff = binomial(this.order, i)*(Math.pow(t,i))*(Math.pow((1-t),(this.order-i)));
      point.x += this.points[i].x*bezierCoeff;
      point.y += this.points[i].y*bezierCoeff;
    }
    return point;
  }
}