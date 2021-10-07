# 7. Seam Allowance

Inicialmente, pensé que la solución era un escalado de una figura, que responde a la operación matricial ```P' = kI x  P``` donde:
- P es un vértice de la figura.
- k es la constante de escalado, con k>1 para que el tamaño aumente.
- I  es la matriz identidad.

Al realizar dicha operación, se obtiene la figura aumentada, pero descolocada en el plano, por lo que habría que aplicarle una traslación respecto a un punto, con la operación matricial ```P' = P + Q``` donde:
- P es un vértice de la figura
- Q es el punto sobre el que hacer la traslación

Para que esa traslación centrara la figura resultante, como su propio nombre indica, habría que encontrar el centroide de la misma. El centroide de un polígono puede calcularse como el sumatorio de sus coordenadas (x,y) dividido entre el número total de vértices.

Una vez obtenido el centroide, los pasos serían:
1. ```P' = P - C``` donde:
  - P es un vértice de la figura
  - C es el centroide
2. ```P'' = kI x P'``` 
3. ```P''' = P'' + C```

Me di cuenta al implementarlo gráficamente (dejo los archivos .html y js) que esta operación funcionaba solamente con polígonos convexos, ya que en un polígono cóncavo el cálculo del centroide no es tan trivial. Se tiene que calcular dividiendo la figura en otras más sencillas (triángulos o rectángulos) y calculando sus respectivos centroides de la siguiente forma:
- Si la figura es un triángulo:
  - Calculamos el área como: ```A = (b*h)/2``` donde b es la base y h la altura
  - Calculamos las coordenadas del centroide: ```Cx = b/3, Cy = h/3```
  - Calculamos las coordenadas ponderadas: ```Ax = A*Cx, Ay = A*Cy```
- Si la figura es un rectángulo:
  - Calculamos el área como: ```A = b*h```
  - Calculamos las coordenadas del centroide: ```Cx = b/2, Cy = h/2```
  - Calculamos las coordenadas ponderadas: ```Ax = A*Cx, Ay = A*Cy```
- Calculamos las coordenadas del centroide como el sumatorio de las coordenadas ponderadas entre el sumatorio de las áreas: ```Cx = Ax(total)/A(total), Cy = Ay(total)/A(total)```

Una vez tuve esto, pensé que no siempre todas las figuras van a estar definidas por funciones de grado 1 (lineales), por lo que pensé que si obtenía los puntos de intersección de ellas, podía obtener una figura con bordes lineales y operar con ella para obtener los nuevos puntos. De ellos, sacar las diferencias de x e y para, mediante traslaciones de funciones, obtener las nuevas ecuaciones:
- Para traslaciones sobre el eje x, sería: ```g(x) = f(x) + k``` donde:
  - f(x) es la función que define la figura inicial
  - k es la diferencia de la coordenada x
- Para traslaciones sobre el eje y, sería: ```g(x) = f(x + k)``` donde:
  - f(x) es la función que define la figura inicial
  - k es la diferencia de la coordenada y

