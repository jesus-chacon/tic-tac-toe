# Documentación del Código

Este documento proporciona una descripción general y una documentación para el código de los archivos DOM.js, utils.js y main.js.

## DOMUtils

Wrapper para hacer las gestiones básicas de DOM buscar, mostrar y ocultar

### getById(id: string): HTMLElement

Recupera un elemento del DOM por su ID.

- `id` (string): El ID del elemento a recuperar.
- Devuelve (HTMLElement): El elemento con el ID especificado.
- Lanza (Error): Se lanza si no se encuentra el elemento con el ID especificado.

### showById(id: string): void

Muestra un elemento del DOM por su ID.

- `id` (string): El ID del elemento a mostrar.

### hideById(id: string): void

Oculta un elemento del DOM por su ID.

- `id` (string): El ID del elemento a ocultar.

## Utils

### getSvgHTML(type: string): string

Obtiene el HTML de un icono SVG para el caso de 'x' y 'o'.

- `type` (string): El tipo de SVG.
- Devuelve (string): El HTML del SVG.

### getBaseState(): Object

Obtiene el estado base del juego.

- Devuelve (Object): El estado base del juego.

### nextPlayer(currentPlayer: string): string

Determina qué jugador debe ser el siguiente.

- `currentPlayer` (string): El jugador actual.
- Devuelve (string): El siguiente jugador.

### findWinner(board: Array<Array<string|null>>, player: string, row: number, col: number): string|null

Determina si hay un ganador en el juego actual.

- `board` (Array<Array<string|null>>): El tablero del juego.
- `player` (string): El jugador actual.
- `row` (number): La fila de la posición clicada.
- `col` (number): La columna de la posición clicada.
- Devuelve (string|null): El jugador ganador o `null` si no hay ganador.

### checkTie(board: Array<Array<string|null>>): boolean

Determina si hay un empate.

- `board` (Array<Array<string|null>>): El tablero del juego.
- Devuelve (boolean): `true` si hay un empate, `false` de lo contrario.

## Main

### init(): void

Inicializa el juego.

### reset(): void

Reinicia el juego.

### onClickPosition(): void

Maneja el evento onClick en las celdas del tablero.

### updateWinner(winner: string): void

Actualiza al ganador.

- `winner` (string): El jugador ganador.

### updateNextPlayer(currentPlayer: string): void

Actualiza el jugador siguiente.

- `currentPlayer` (string): El jugador actual.

### setupBoard(): void

Rellena el tablero en blanco y configura el evento onClick para las celdas.

## Variables y Estados

### currentGameState: Object

Almacena el estado actual del juego, incluyendo el jugador actual, el tablero y las estadísticas de victorias.

## Ejecución Inicial

El juego se inicializa automáticamente al cargar el DOM, llamando a la función `init()`.

```javascript
document.addEventListener("DOMContentLoaded", () => {
  init();
});
```
