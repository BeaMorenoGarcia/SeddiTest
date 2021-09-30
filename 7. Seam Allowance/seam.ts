class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

class Seam {
    points: Point[];
    vector: Point;

    constructor(points: Point[], vector: Point) {
        this.points = points;
        this.vector = vector;
    }

    scal() {
        //Matriz de escalado
        var exit = [];
        //Producto de puntos
        this.points.forEach(point => {
            exit.push(new Point(this.vector.x*point.x, this.vector.y*point.y))
        })

        return exit;
    }
}

const seam = new Seam([new Point (0,0), new Point(0,3), new Point(1,2), new Point(3,3), new Point(3,0)], new Point(2,0));
console.log(seam.scal())