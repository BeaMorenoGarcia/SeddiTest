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
1. ```P1 = P - C``` donde:
    - P es un vértice de la figura
    - C es el centroide
2. ```P2 = kI x P'``` 
3. ```P' = P2 + C```

La operación de realizar un escalado respecto a un centro, se llama homotecia y se calcula mediante la operación matricial: ```P' = kxP+(1-k)xC``` donde:
- P es un vértice de la figura.
- k es la razón de homotecia, con k>1 para que el tamaño aumente.
- I  es la matriz identidad.
- C es el centro de homotecia, en nuestro caso será el centroide de la figura.

Como parámetro de entrada del algoritmo, no será el valor de la razón de homotecia, sino la distancia que debe haber entre la figura original y la resultante (el tamaño del borde), por lo que hay que calcular el valor de la razón a partir de la misma. Sabiendo que la distancia de un punto P' en la homotecia al centro es: ```CP' = k*CP``` y sabiendo que la distacia del centro a cualquier vértice P es la misma obtenemos que ```k = (d-CP)/CP``` donde:
- CP es la distancia entre el centro C y un vertice P de la figura: ```CP = sqrt((Px-Cx)^2 + (Py-Cy)^2).
- d es la distancia entre las figuras: ```d = CP' - CP```

Me di cuenta al implementarlo gráficamente (dejo los archivos .html y js) que esta operación funcionaba solamente con polígonos convexos, ya que en un polígono cóncavo el cálculo del centroide no es tan trivial y puede ser un punto que se encuentre fuera de la figura. Se tiene que calcular dividiendo la figura en otras más sencillas (triángulos) y calculando sus respectivos centroides de la siguiente forma:
- Sea un triángulo PQR:
  - Calculamos la base y la altura: ```b = (Px + Qx + Rx), h = (Py + Qy + Ry)```
  - Calculamos el área como: ```A = (b*h)/2``` donde b es la base y h la altura
  - Calculamos las coordenadas del centroide: ```Cx = b/3, Cy = h/3```
  - Calculamos las coordenadas ponderadas: ```Ax = A*Cx, Ay = A*Cy```
- Calculamos las coordenadas del centroide como el sumatorio de las coordenadas ponderadas entre el sumatorio de las áreas: ```Cx = Ax(total)/A(total), Cy = Ay(total)/A(total)```

Una vez tuve esto, pensé que no siempre todas las figuras van a estar definidas por funciones de grado 1 (lineales), por lo que pensé que si obtenía los puntos de intersección de ellas, podía obtener una figura con bordes lineales y operar con ella para obtener los nuevos puntos. De ellos, sacar las diferencias de x e y para, mediante traslaciones de funciones, obtener las nuevas ecuaciones:
- Para traslaciones sobre el eje x, sería: ```g(x) = f(x) + k``` donde:
  - f(x) es la función que define la figura inicial
  - k es la diferencia de la coordenada x
- Para traslaciones sobre el eje y, sería: ```g(x) = f(x + h)``` donde:
  - f(x) es la función que define la figura inicial
  - h es la diferencia de la coordenada y

Para la función final, realizaremos primero la traslación sobre el eje x y luego sobre el y: ```g(x) = f(x+h) + k```

Una vez hecho esto, pensé que al calcular el centroide modificando los bordes de la figura inicial (los transformo todos en rectas que pasan por los puntos de corte de las funciones), podía no estar calculando correctamente los centroides de las figuras definidas por funciones no lineales. En estas, sus centroides se calculan por integración:

![image](https://user-images.githubusercontent.com/62429039/136408760-3c8e8b25-626e-4843-a9c4-293627fd2243.png)

donde:
- A es el área de la región definida.
- ~~x~~ es el módulo de la diferencia de funciones en el eje x
- ~~y~~ es el módulo de la diferencia de funciones en el eje y

Os dejo un enlace con un ejemplo explicado del cálculo: https://sjnavarro.files.wordpress.com/2008/08/centroides-e-inercia.pdf

Finalmente, el algoritmo que propongo sería:

Sea F la región definida por las funciones f(x), g(x)...:
- Calculamos los puntos de intersección entre ellas igualándolas
- Calculamos su centroide C
- Calculamos la razón k de la homotecia a partir de la distancia d: ```k = (d-CP)/CP```
- Realizamos la homotecia: ```P' = kxP+(1-k)xC```
- Calculamos los valores X y Y de los vértices y los vértices de la homotecia ```X = (P'x-P''x), Y = (P'y - Py)```
- Obtenemos las nuevas funciones realizando la composición de funciones de las traslaciones  ```g(x) = f(x+Y) + X```

