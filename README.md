# tic-tac-toe

# Steps resolución (resumen)

- Crear repo de Git, para mantener versionado del código por si fuese necesario.
- Crear un entorno de desarrollo cómodo y adaptado al tamaño del proyecto.
  - Vite: Hot Reload, scss, modules resolution
  - Mocha: Testing
  - Scss
  - prettier
  - eslint
- Ordenar código y analizar
  - Let usados para variables que pueden ser const y eso será un problema de scope.
  - Ordenar la lógica para tener las funciones arriba del código.
  - Añadir una variable que gestione todo el estado del juego (board, winner, contador de victorias, ...)
  - Adaptación funciones a la nueva variable para la gestión del estado.
  - Limpiar código duplicado (onClick, reset, ...)
  - Mejorar funciones
    - Eliminar bucles no necesarios
    - Encapsular funciones para reutilizar el código y hacerlo mas testeable
    - Añadir funciones para la gestión del dom
    - Hacer función para el inicio del juego
  - Implementar estilos definidos en Zeplin
- SCSS
- Testing
- Otras mejoras
