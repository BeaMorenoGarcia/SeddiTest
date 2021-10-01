class Point {
/*     x: number;
    y: number; */

    constructor(x/* : number */, y/* : number */) {
        this.x = x;
        this.y = y;
    }
}

class Seam {
/*     points: Point[];
    coeff: number; */

    constructor(points/* : Point[] */, coeff/* : number */) {
        this.points = points;
        this.coeff = coeff;
    }
    

    scal() {
        var x = [],y = [];
        //Matriz de escalado
        var exit/* : Point[] */ = [];
        var center = get_polygon_centroid(this.points);

        drawCoordinates(center.x*50, center.y*50, '#000000')

        this.points.forEach(point => {
            x.push(point.x);
            y.push(point.y);
        })

        var maxX = Math.max(...x), maxY = Math.max(...y), minX = Math.min(...x), minY = Math.min(...y)

        this.points.forEach(point => {
            if(point.x<maxX && point.y<maxY && point.x>minX && point.y>minY) exit.push(new Point(point.x, 0.5+point.y))
            else exit.push(new Point(center.x + Math.sqrt(this.coeff)*(point.x - center.x), center.y + Math.sqrt(this.coeff)*(point.y - center.y)))
        })

        return exit;
    }
}

function get_polygon_centroid(pts) { 
    var first = pts[0], last = pts[pts.length-1]; 
    if (first.x != last.x || first.y != last.y) pts.push(first); 
    var twicearea=0, 
    x=0, y=0, 
    nPts = pts.length, 
    p1, p2, f; 
    for (var i=0, j=nPts-1 ; i<nPts ; j=i++) { 
     p1 = pts[i]; p2 = pts[j]; 
     f = (p1.y - first.y) * (p2.x - first.x) - (p2.y - first.y) * (p1.x - first.x); 
     twicearea += f; 
     x += (p1.x + p2.x - 2 * first.x) * f; 
     y += (p1.y + p2.y - 2 * first.y) * f; 
    } 
    f = twicearea * 3; 
    return { x:x/f + first.x, y:y/f + first.y }; 
} 

function drawCoordinates(x,y, color){
    var pointSize = 3; // Change according to the size of the point.
    var  canvas = /* <HTMLCanvasElement>  */ document.getElementById("mycanvas");
    var ctx = canvas.getContext("2d");


    ctx.fillStyle = color; // Red color

    ctx.beginPath(); //Start path
    ctx.arc(x, y, pointSize, 0, Math.PI * 2, true); // Draw a point using the arc function of the canvas with a point structure.
    ctx.fill(); // Close the path and fill.
}

function drawPoints(point1, point2, color) {
    var size = 1.5; // Change according to the size of the point.
    var  canvas = /* <HTMLCanvasElement>  */ document.getElementById("mycanvas");
    var ctx = canvas.getContext("2d");

    ctx.lineWidth = size;
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(point1.x*50, point1.y*50);
    ctx.lineTo(point2.x*50, point2.y*50);
    ctx.stroke();
}

const seam = new Seam([new Point (2,3), new Point(2,5), new Point(3,4), new Point(5,5), new Point(5,3)], 2);

seam.points.forEach((point, i) => {
	drawCoordinates(point.x*50, point.y*50, '#ff0000')
    if (i == seam.points.length-1)drawPoints(point, seam.points[0], '#ff0000')
    else drawPoints(point, seam.points[i+1], '#ff0000')
})

const border = seam.scal();
border.forEach((point, i) => {
	drawCoordinates(point.x*50, point.y*50, '#00c2c9')
    if (i == border.length-1) drawPoints(point, border[0], '#00c2c9')
    else drawPoints(point, border[i+1], '#00c2c9')
})