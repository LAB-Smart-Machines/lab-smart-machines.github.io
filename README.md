## Herramientas Utilizadas

📄 [Diseño hecho en webflow ](https://smart-machines.webflow.io/)

💻 [Website en progreso](https://lab-smart-machines-github-io.vercel.app/)

🏁 [Iconos FontAwesome](https://fontawesome.com/)

🙂 [Ilustraciones unDraw](https://undraw.co/)

Usamos NextJS, GraphQL y Vercel para desplegar.

# Hosting con Vercel ([Introduccion](https://vercel.com/docs/introduction))

## Como usar 💻

### <b>Descargar Node.js</b>

Node.js es un entorno de ejecución para JavaScript.
Descargarlo : https://nodejs.org/es/

### <b>Clonar el repositorio e Instalar</b>

`git clone https://github.com/LAB-Smart-Machines/lab-smart-machines.github.io.git`

### <b> Instalar todo los packages</b>

Instalar packages necesarios

```bash
npm install
```

### <b>Variables? </b>

Se hace una conexión al GraphQL API de Github que nos ayuda a ver el repositorio necesario. Para eso, se requiere un token de acceso personal para autenticar y acceder el contenido del usuario. Si no tienes el token, se necesita crear uno nuevo. En este proyecto, usamos un token de Github que nos da permiso ver nuestros proyectos.

![Image of Logged In](readme-img/developer-settings.png)

Lee mas [aquí](https://help.github.com/es/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line).

Despues de haber copiado el nuevo token, no te olvides de ponerlo en tu archivo `.env` qu esta localizado en el directorio raíz de tu proyecto, y es necesario para nuestro despliegue local. Agregar variables específicas en forma de `NOMBRE = VALOR` a tu archivo `.env`.

En este proyecto, es requerido tener `LSM_GITHUB_TOKEN` en `.env` como:

```javascript
LSM_GITHUB_TOKEN = xxxxxxxxxxxxxxxxxxxxxxx;
```

❗ _Mantener seguro tu cuenta y tus datos. Como precaución de seguridad, archivos `.env` deben ser ignorados para indicarle a Git que no lo quieres compartir. Tienen que estar añadidos a tu archivo [`.gitignore`](https://docs.github.com/es/github/using-git/ignoring-files) localizado en el directorio raíz de tu proyecto._

❗ **_Advertencia: Preserva tus tokens de la misma manera que tus contraseñas y no se las reveles a nadie. Cuando trabajes con un API, usa tokens como variables del entorno en lugar de codificarlos de forma rígida en tus programas._**

## Importante 📌

Si el token que usamos, `LSM_GITHUB_TOKEN`, de Github ha cambiado, tambien es necesario actualizar el valor en [Vercel](https://vercel.com/docs/build-step#environment-variables) con el mismo nombre `LSM_GITHUB_TOKEN`.

## Como desplegar a Vercel? 🚀

Cada vez que el codigo se actualiza en el branch `master`, Vercel deberia desplegar y actualizarlo instantáneamente.

Entra a la pagina de [Vercel](https://vercel.com/), inicia la sesión que debe estar conectada al Github [`lab-smart-machines`](https://vercel.com/lab-smart-machines/lab-smart-machines-github-io) si quieres ver el log.

### [Como edito la pagina principal?](/EDITAR.md) ✏

### [Como uso Markdown?](/MARKDOWN.md) 📃
