import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header/Header';
import Contacto from './components/contacto/Contacto';
import Educacion from './components/educacion/Educacion';
import Footer from './components/footer/Footer';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <section id="informacion">
    <Contacto />
    </section>

    <section id="experiencia">
    <Educacion />
    </section>

    <section >
    <Footer />
    </section>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
