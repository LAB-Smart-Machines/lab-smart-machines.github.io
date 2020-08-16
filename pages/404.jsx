import App from "../components/App";
import logo from "../public/static/images/smart_machines_ctic_logo.png";

const ErrorPage = () => (
  <App>
    <div className="error-page">
      <h1>¡ 404 !</h1>
      <h2>Esta pagina no existe</h2>

      <img
        className="logo-img"
        src={logo}
        alt="regresar al inicio"
        sizes="(max-width: 900px) 60px, 190px"
        width="500"
      ></img>
    </div>
  </App>
);

export default ErrorPage;
