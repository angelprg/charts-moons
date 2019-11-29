## Moons FrontEnd
Instrucciones para visualizar el proyecto:
```sh
$ git clone https://github.com/angelprg/charts-moons.git
$ npm install
$ npm start
```
Abrir la url: [http://localhost:3000](http://localhost:3000) en algún navegador.

| Tecnologías utilizadas |
| ------ |
| React / Hooks |
| D3 / react-d3 |
| Bootstrap |

Proyecto con estructura MVC
La librería react-d3 presenta una incompatibilidad con nuevas versiones de react, por lo que muestra algunos mensajes en consola, pero no afectan la funcionalidad. Se puede corregir sustituyendo todos los elementos `textComponent` por `textcomponent` (lowercase) en el archivo node_modules\react-d3-library\dist\react-d3-library.js

> La distancia entre los componentes puede variar respecto a la imágen de referencia, para ajustarse de forma responsive.
