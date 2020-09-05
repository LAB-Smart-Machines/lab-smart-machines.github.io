# Como uso Markdown? 📃

Un ejemplo de como se puede ver el contenido de Markdown de un proyecto esta [aquí](https://github.com/LAB-Smart-Machines/TestUno/blob/master/README.md) y en el website aparece [aquí](https://lab-smart-machines-github-io.vercel.app/proyecto?titulo=testuno).

## Como funciona

Se hace una coneccion al GraphQL API de Github que nos ayudar a ver el repositorio necesario y despues se usa un package llamado [react-markdown](https://github.com/rexxars/react-markdown) que reproduce archivos `.md` como el `README.md` que usamos.

El codigo de GraphQL lo puedes ver en [aquí](/graphql/main.js).

Cada pagina de cada proyecto es dinámicas y se puede ver [aquí](/pages/proyecto.jsx) o el ejemplo [aquí](https://nextjs.org/learn/basics/create-dynamic-pages/passing-data).

### Componente

> "React te permite definir componentes como clases o funciones. Los componentes definidos como clases actualmente proporcionan una serie de características extra que explicamos en esta página. " [React](https://es.reactjs.org/docs/react-component.html#gatsby-focus-wrapper)

Usamos un componente llamado [Columna](../components/Columna.js), y pasa variables de `titulo`, `subtitulo`, `img` y `github`.

```
 <Columna
    titulo={"Test Uno"}
    subtitulo={"subtitulo"}
    img={cohetes}
    github={"testuno"}
  />
```

En el componente `Columna`:

- `titulo` es el titulo que aparece en la pagina del proyecto y en la pagina inicial.
- `subtitulo` es el subtitulo que aparece en la pagina inicial.
- `img` es la imagen que aparece en la pagina inicial.
- `github` es el nombre del repo que aparece en la pagina del proyecto. No olvidar de poner el nombre correcto.
