import App from '../components/App.jsx';

import Seccion from '../components/Seccion';
import Columna from '../components/Columna';
import PROYECTOS from '../PROYECTOS.json';
import CONTENIDO from '../CONTENIDO.json';

const aDiferenteFilas = (data) => {
  const tables = [];
  let fila = [];

  data.proyecto.forEach((row, i) => {
    fila.push(row);
    if ((i + 1) % 3 === 0) {
      // nueva fila
      tables.push(nuevaFila(fila, i));
      fila = [];
    }
  });
  fila.length && tables.push(nuevaFila(fila));
  return tables;
};

const nuevaFila = (data, x) => (
  <div className="w-row" key={x}>
    {data.map((proyecto, i) => (
      <Columna
        data={data}
        key={i}
        titulo={proyecto.titulo}
        subtitulo={proyecto.subtitulo}
        img={
          proyecto.img
            ? require(`../public/static/images/${proyecto.img}`)
            : require('../public/static/images/undraw_scrum_board_cesn.svg')
        }
        github={proyecto.github}
      />
    ))}
  </div>
);

const Home = () => (
  <App>
    <Seccion
      claseSeccion="header"
      claseHeading="main-heading"
      claseSub="main-subtitle"
      titulo={CONTENIDO.titulo_principal}
      subTexto={CONTENIDO.subtexto_principal.join(' ')}
    />
    <Seccion
      claseSeccion="section"
      claseHeading="heading"
      claseSub="text-block"
      titulo={CONTENIDO.titulo_primera_seccion}
      subTexto={CONTENIDO.subtexto_primera_seccion.join(' ')}
    />

    <Seccion
      claseSeccion="about-section"
      claseHeading="heading-2"
      claseSub="about-text"
      titulo={CONTENIDO.titulo_segunda_seccion}
      subTexto={
        <div
          dangerouslySetInnerHTML={{
            __html: CONTENIDO.subtexto_segunda_seccion.join(' '),
          }}
        />
      }
      botonHref="#contact"
      botonTexto="Contacto"
    />

    <div id="proyectos" className="section grey">
      <div className="w-container">
        <h2 className="heading-3">Proyectos</h2>
        <div className="divider grey" />
        {aDiferenteFilas(PROYECTOS)}
      </div>
    </div>
  </App>
);

export default Home;
