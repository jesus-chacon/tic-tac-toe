# tic-tac-toe

En la resolución del juego Tic Tac Toe, prioricé no utilizar librerías externas y me centré en la reutilización del código y el testeo del mismo. He basado su solución en un sistema de clases para encapsular funcionalidad y mejorar la legibilidad del código.

Todo el desarrollo lo he realizado en 4 fases:

- Limpiar, mejorar y entender el código y flujo de partida del código funcional.
- Construir una solución basada en clases.
- Generar una batería de test para el código js.
- Finalmente ajustar los estilos de todo el juego.

## Scripts

### Iniciar

`npm run dev`

### Test

`npm run test`

### Build

`npm run build`

## Pasos de Resolución (resumen)

- **Creé un repositorio de Git** para mantener versionado el código por si fuera necesario.
- **Establecí un entorno de desarrollo** cómodo y adaptado al tamaño del proyecto.
  - Vite: Hot Reload, SCSS, resolución de módulos
  - Mocha: Testing
  - SCSS
  - Prettier
  - ESLint: anticipar errores
- **Ordené el código y lo analicé**.
  - Cambié el uso de `let` por `const` para variables que pueden ser constantes.
  - Organicé la lógica para tener las funciones arriba del código.
  - Añadí una variable que gestiona todo el estado del juego (tablero, ganador, contador de victorias, ...).
  - Adapté funciones a la nueva variable para la gestión del estado.
  - Limpié código duplicado (onClick, reset, ...).
  - Mejoré funciones.
    - Eliminé bucles no necesarios.
    - Encapsulé funciones para reutilizar el código y hacerlo más testeable.
    - Añadí funciones para la gestión del DOM.
    - Creé una función para el inicio del juego.
    - Añadí descripciones y tipado a las funciones.
  - Paso de la esctructura funcional a una basada en clases.
  - Añadir pequeña batería de tests.
  - Implementé estilos definidos en Zeplin.
- **SCSS**.
- **Testing**.
- **Deploy**.
- **Documentación**.

## Mejoras en JavaScript

### Limpieza y Estructurado del Código

Separé el código en varios archivos para mejorar la legibilidad, limpié la funcionalidad duplicada y añadí descripciones de tipos para cada método. También eliminé algunas llamadas redundantes y encapsule la funcionalidad en clases

Añadí una función de inicialización para agrupar todo el inicio del código y espere a que el documento esté listo para ejecutar el código cuando el DOM esté preparado.

Todo el código está centrado construir bloques lógicos para cada parte de la funcionalidad (manejar elementos, gestión del tablero, DOM) de esta manera todo el código queda desacoplado y podemos centrar exfuerzos en mejorar cada parte por separado para atacarlo con un equipo y poder decidar esfuerzos en paralelo de una formas mas cómoda.

Importante tener en la vista el uso de prettier y eslint para que el código que generamos tenga una estilo común y poder anticiparnos a todos los errores posibles de cara a generar un código de mejor calidad.

### `PLAYER_X` y `PLAYER_O`

Constantes para evitar valores directos dentro del código.

### `getWinner`

Reducí las comprobaciones que se realizaban anteriormente, solo revisa la columna y la fila del último clic y la diagonal. Uso de un bucle `while` para terminar en caso de encontrar una celda diferente.

### `BOARD_SIZE`

Constante para manejar el tamaño del tablero y poder plantear un tablero de NxN para hacer un N en linea.

## Mejoras en HTML y Assets

### Reutilización del SVG

Añadí la definición del SVG dentro del propio HTML para mejorar la entrega del contenido y favorecer una reutilización más eficiente. Otra opción podría ser introducir el SVG dentro de un CDN.

### Estructura del Código

Realicé una estructura del código y las clases necesarias basándome en BEM para que los bloques de la aplicación queden más diferenciados y ordenados tanto en HTML como en el CSS.

## Estilos

Implementé todos ellos usando SCSS para mejorar la reutilización y la calidad de los estilos. Opté por añadir un reset de los estilos para unificar los diferentes navegadores. La implementación se realizó pensando en dispositivos móviles y añadiendo el responsive para desktop manteniendo su aspecto y limitando el tamaño.

## Testing

Añadí una pequeña batería de tests para validar parte de la funcionalidad implementada.

## Deploy

Opté por Docker para el despliegue del código, aprovechando su capacidad para realizar builds y servir activos estáticos a través de Nginx. Esta elección proporciona una solución eficiente y escalable para la implementación de la aplicación.

## Otras Mejoras Propuestas

- **Uso de TypeScript**: Mejoraría el tipado y la descripción de interfaces y métodos. Desde esta estructura en clases sería muy sencillo.
- **Implementación del cambio de color con un color picker básico**: para poder customizar aún mas todo el juego
- **Eliminación de la alerta y uso de una librería externa de popups**: Intentaría evitar el uso de alerts ya que es mucho mas bloqueante.
- **Utilización de algún framework**, como Nuejs (muy ligero) o Vue o React. De esta manera, gestionaríamos de mejor manera todos los elementos y tendríamos una solución mas actual.
- **Utilización de alguna liberería de estilos**: Buscariamos alguna librería de estilos o componentes para mejorar el look and feel y con ello simplificar el sass final utilizado mejorando la gestión del espacio, tipos y elementos.
- **Implementar la generación del HTML en JS**: En caso de no decantarnos por un framework yo optaría por hacer toda la generación de la estructura en js para que si un usuario quiere añadir el juego a su web solo necesitemos el div o el elemento html de partida y le montamos toda la estructura para mejorar la usabilidad del código.
