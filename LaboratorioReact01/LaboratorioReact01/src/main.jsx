import React from 'react' // Importamos la biblioteca React para crear y trabajar con componentes de React
import ReactDOM from 'react-dom/client' // Importamos la función ReactDOM desde la biblioteca react-dom/client para renderizar los componentes de React en el DOM del navegador
import { App } from './App.jsx' // Importamos el componente App desde el archivo App.jsx
import './index.css' // Importamos los estilos CSS para nuestra aplicación

const root = ReactDOM.createRoot(document.getElementById('root')) // Creamos un "root" en el DOM donde se mostrará nuestra aplicación

root.render( // Renderizamos el componente App dentro del "root" en el DOM
  <App />
)
