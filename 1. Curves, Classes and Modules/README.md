# 1. Curves, Classes and Modules

The BezierCurve2 class has as input parameter a point list where the first and last points are the start and end points of the curve, respectively, and the rest are the control points. The eval function has as input parameter a value t, between 0 to 1, to eval the Bezier curve.

The BezierPath2 class has as input a point list with all the points of the path order by the x-coordinate. The getSegment funtion has as obligatory input parameter an index, and as optional input parameter an init value. If the function has the init value, it will return a new BezierCurve of the sublist from the init element with as many elements as the value of index (the interval [init, init+index]). If the function has not the init value, its value will be 0 and the interval is [0, index].

The proposed solution has as input parameters a list with all the points (initial, final and control) that going to define the Bezier curve, so we can change it whenever we want to recalculate the mentioned curve. 

In addition, the implementation consider more order curves, deppending on the list of points received. For example, if we receive 2 points, the Bezier curve would be a straight line because the points are the start and final.
