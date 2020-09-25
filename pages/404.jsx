import App from '../components/App';
import logo from '../public/static/images/smart_machines_ctic_logo.png';

const ErrorPage = () => (
  <App>
    <div className="error-page">
      <h1>¡ 404 !</h1>
      <h2>ESTA PÁGINA NO EXISTE</h2>

      <img
        className="error-img"
        src={logo}
        alt="regresar al inicio"
        sizes="(max-width: 900px) 300px, 190px"
        width="500"
      />
    </div>
  </App>
);

export default ErrorPage;
