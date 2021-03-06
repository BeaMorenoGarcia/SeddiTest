# 7. Seam Allowance

At first, I thought that the solution would be an scale factor, which responds to the matrix operation ```P' = kI x  P``` where:
- P is a figure's apex 
- k is scale factor fixed value.
- I is the identity matrix.

When making this operation, we get the enlarged figure, but misplaced in plane, so we have to apply it a translation from a point with the matrix operation ```P' = P + Q``` where:
- P is a figure's apex 
- Q is the translation point

For that translation centered the resulting figure, as its name indicates, we would have to find the centroid of it. The polygon centroid could be calculated as the summation of its coordinates divided by the total number of apexes.
> Para que esa traslación centrara la figura resultante, como su propio nombre indica, habría que encontrar el centroide de la misma. El centroide de un polígono puede calcularse como el sumatorio de sus coordenadas (x,y) dividido entre el número total de vértices.

Once the centroid is got, the next steps would be:
1. ```P1 = P - C``` donde:
    - P is a figure's apex 
    - C is the centroid
2. ```P2 = kI x P'``` 
3. ```P' = P2 + C```

The operation of making an scale factor from a center, it is an homothecy and it is calculated by the matrix operation ```P' = kxP + (1-k)xC``` where:
- P is a figure's apex
- k is the homothecy ratio, with k>1 so the size increases.
- I is the identity matrix.

As an input parameter of the algorithm, it will not be the value of the homothecy ratio, but the distance that must exist between the original figure and the resulting one (the size of the border), so the value of the ratio must be calculated from the same. Knowing the distance from a point P' in the homothecy to the center is ```CP' = k*CP``` and the distance from the center to any apex will be the same we have ```k = (d-CP)/CP``` where:
- CP is the distance between the center C and a figure's apex P: ```CP = sqrt((Px-Cx)^2 + (Py-Cy)^2)```
- d is the distance between the figures: ```d = CP' - CP```

I realized when implementing it graphically (I leave the .html and .js files) this operation only works in convex polygons, since in a concave polygon the calculation of the centroid is not so trivial and it could be a point out of the figure. It have to be calculated dividing the figure into simpler ones (triangles) and calculating their respective centroids as follows:
- Let be a triangle PQR:
    - The base and the height are calculated as: ```b = (Px + Qx + Rx), h = (Py + Qy + Ry)```
    - The area is calculated as: ```A = (b*h)/2```
    - The coordinates of the centroid are calculated as: ```Cx = b/3, Cy = h/3```
    - Weighted coordinates are calculated: ```Ax = A*Cx, Ay = A*Cy```
- The coordinates of the centroid are calculated as the sum of the weighted coordinates divided by the summation of the areas: ```Cx = Ax(total)/A(total), Cy = Ay(total)/A(total)```

Once I had got this, I thought not all the figures are always going to be defined by order 1 functions (linear), so I thought if I got the intersection points of them, I could obtained a figure with linear edges and operate with it to obtain the new points. From them, get the difference of the x and y coordinates to, by functions' translations, get the new equations: 
- For translations about the x-axis, it would be: ```g(x) = f(x) + k``` where:
    - f(x) is the function that defines the initial figure
    - k is the difference between x coordinates
- For translations about the y-axis, it would be: ```g(x) = f(x + h)``` where:
    - f(x) is the function that defines the initial figure
    - h is the difference between y coordinates

To the result function, we make first translations about the x-axis and then about y-axis: ```g(x) = f(x+h) + k```

Once this is done, I thought when I calculate the centroid modifying the edges of the initial figure (I turn all of them into straight lines that pass through the intersection points), I could not calculating properly the centroids of figures defined by nonlinear functions. In them, their centroids are calculating by integration:

![image](https://user-images.githubusercontent.com/62429039/136408760-3c8e8b25-626e-4843-a9c4-293627fd2243.png)

where:
- A is the area of the defined region.
- ~~x~~  is the modulus of the difference of functions on the x-axis
- ~~y~~  is the modulus of the difference of functions on the y-axis

I leave you a link with an explained example of the calculation: [0d78b4d8c14d6c34a6ce194b826b5280.pdf](https://github.com/BeaMorenoGarcia/SeddiTest/files/7319872/0d78b4d8c14d6c34a6ce194b826b5280.pdf)

Finally, the algorithm that I propose would be:
Let F be the region defined by the functions f(x), g(x)...:
- The intersection points are calculated by equating them.
- The centroid is calculated.
- The homothecy ratio is calculated from the distance d: ```k = (d-CP)/CP```
- The homothecy is calculated: ```P' = kxP+(1-k)xC```
- The X and Y values of the vertices and the vertices of the homothecy are calculated: ```X = (P'x-P''x), Y = (P'y - Py)```
- The new functions are obtained by the composition of functions of the translations: ```g(x) = f(x+Y) + X```

In the image, it can be seen a dialog box where the user can select the offset distance, the join type and the miter limit to define the seam allowances of the original figure. In the algorithm proposed by me these input parameters are not considered because it is not a graphic solution, is a theoretical solution using geometric operations. 
