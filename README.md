# Lógica de programación 3: Calculadora de factorial

En este ejercicio hice un programa en JavaScript que calcula el factorial de un número. El factorial de un número es el producto de todos los enteros positivos desde el 1 hasta ese número. Por ejemplo, 4! = 1 x 2 x 3 x 4 = 24.

Es una página web con un campo de texto y un botón. La persona escribe un número, le da a "Calcular" (o presiona Enter) y el resultado aparece en la misma página.

## Cosas que me encontré en el camino

Cuando probé con 120, el resultado salía en notación científica y no era exacto. Esto pasa porque los números normales de JavaScript solo guardan unos 15 a 17 dígitos exactos. Lo resolví usando `BigInt`, que permite trabajar con enteros gigantes, y ahora el 120! sale con todos sus dígitos exactos.

Pero entonces el número era tan largo que se salía de la pantalla. Primero lo arreglé con `word-break: break-all` en el CSS para que se partiera en varias líneas, y después decidí acortar los resultados muy largos (lo explico más abajo).

También separé los estilos en su propio archivo `style.css` para tener el código más ordenado.

## Restricciones

Para que la calculadora no se rompa ni se quede pegada, le puse estas reglas:

- **Solo enteros positivos o 0.** Si la persona deja el campo vacío, escribe un número negativo o un decimal, sale un mensaje de error en rojo.
- **Límite de 1000.** Si el número es mayor que 1000, también sale un mensaje de error. Con números gigantes (como 100000) el navegador se quedaba pensando demasiado. El límite está en el HTML (`max="1000"`) y también en el JavaScript, porque el atributo del HTML por sí solo no impide que alguien escriba un número más grande a mano.
- **Resultados largos acortados.** Si el resultado tiene más de 30 dígitos, muestro los primeros 10, los últimos 10 y cuántos dígitos tiene en total. Por ejemplo, `120! = 6689502913...0000000000 (199 digits)`. Los números que caben completos se muestran enteros.

El límite y los tamaños del recorte están en constantes al inicio de `main.js` (`MAX_NUMBER`, `MAX_DIGITS_SHOWN` y `EDGE_DIGITS`), así que se pueden cambiar fácil.

## Archivos

- `index.html`: la página con el campo de texto y el botón.
- `main.js`: la lógica del factorial, las validaciones y el recorte de resultados.
- `style.css`: los estilos de la página.

## Cómo probarlo

Descarga el repositorio y abre `index.html` en el navegador. Los tres archivos (`index.html`, `main.js` y `style.css`) tienen que estar en la misma carpeta.