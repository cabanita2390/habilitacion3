# HABILITACIÓN CICLO 3

## Integrantes:
Felipe Cabana
Nicolas Rodriguez Camacho
Daniel Mora
Camilo Rojas
Alejandro Gómez Vélez

Se propone analizar, diseñar, construir y desplegar una aplicación de software que permita realizar el seguimiento de las ventas de un producto y/o servicio en una empresa.

la aplicación web debe contar con los siguientes módulos: 

## Gestión de ingreso al sistema de información. 
El sistema tendrá una interfaz gráfica para el ingreso a la aplicación (registro e inicio de sesión), la autorización de ingreso a la aplicación estaría a cargo de un tercero (Gmail) mediante “Oauth 2”; todos los usuarios que se registran entran en estado pendiente.

## Módulo administrador de productos. 
El sistema tendrá una interfaz gráfica para el registro de productos y otra para listar, buscar y actualizar productos, cada uno debe contar con los siguientes atributos: Identificador único (Inmutable), descripción, valor unitario y estado (disponible, no disponible).

## Módulo administrador de ventas.
El sistema tendrá una interfaz gráfica para el registro de las ventas y otra para listar, buscar y actualizar las ventas realizadas (Actualizar se refiere a establecer los diferentes estados de la venta: En proceso, cancelada o entregada, o editar alguno de sus otros campos modificables). Cada venta debe contar con los siguientes atributos: Identificador único de venta  (Inmutable), el valor total de la venta, identificador, cantidad y precio unitario de cada producto, fecha de venta, el documento de identificación y nombre del cliente, y, además, deberá contar con un encargado de gestionar dicha venta (vendedor).

## Gestión de usuarios.
Permite ver y actualizar el rol (administrador y vendedor) y el estado del usuario (pendiente/autorizado/no autorizado).





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
