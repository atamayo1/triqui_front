---

# Juego de Triqui con React.js

Este es un sencillo juego de Triqui (Tres en Raya / Tic-Tac-Toe) implementado utilizando React.js. El objetivo del juego es hacer una línea horizontal, vertical o diagonal con tres marcas iguales (X o O).

## Características

- **Interfaz intuitiva**: Interfaz de usuario limpia y fácil de usar.
- **Multijugador local**: Dos jugadores pueden jugar en el mismo dispositivo.
- **Historial de movimientos**: Permite ver el historial de movimientos y regresar a cualquier punto del juego.
- **Declaración de ganadores**: Notifica cuando un jugador ha ganado o si hay un empate.

## Requisitos

- Node.js (versión 14 o superior)
- npm (versión 6 o superior) o yarn (versión 1.22 o superior)

## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto localmente:

1. **Clona este repositorio**:

    ```bash
    git clone git@github.com:atamayo1/triqui_front.git
    cd triqui_front
    ```

2. **Instala las dependencias**:

    ```bash
    npm install
    ```

    o

    ```bash
    yarn install
    ```

3. **Ejecuta la aplicación**:

    ```bash
    npm start
    ```

    o

    ```bash
    yarn start
    ```

4. Abre tu navegador y visita `http://localhost:3000` para ver la aplicación en funcionamiento.

## Estructura del Proyecto

La estructura principal del proyecto es la siguiente:

```
triqui_front/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── Board.js
│   │   ├── Square.js
│   ├── App.js
│   ├── index.js
│   ├── styles.css
├── package.json
├── README.md
```

- **`public/`**: Contiene el archivo HTML principal.
- **`src/`**: Contiene todos los archivos fuente del proyecto.
  - **`components/`**: Contiene los componentes `Board` y `Square`.
  - **`App.js`**: Componente principal de la aplicación.
  - **`index.js`**: Punto de entrada de la aplicación.
  - **`styles.css`**: Estilos CSS de la aplicación.

## Uso

1. Haz clic en cualquier cuadrado vacío para realizar tu jugada.
2. El juego alternará automáticamente entre los jugadores "X" y "O".
3. El juego declarará un ganador cuando se consiga una línea de tres marcas iguales o un empate si todas las casillas están llenas sin un ganador.
4. Puedes ver el historial de movimientos y regresar a cualquier estado anterior del juego haciendo clic en el movimiento correspondiente.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commit de los mismos (`git commit -m 'Agrega nueva característica'`).
4. Sube tus cambios (`git push origin feature/nueva-caracteristica`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para obtener más detalles.

## Autor

- **Tu Nombre** - [TuGitHub](https://github.com/tu-usuario)

---

¡Gracias por usar el Juego de Triqui con React.js! Disfruta jugando y si tienes alguna sugerencia o encuentras algún problema, no dudes en abrir un issue.

