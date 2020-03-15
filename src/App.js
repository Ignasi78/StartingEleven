import React from 'react';
import { Provider } from "react-redux"
import store from "./store"
import Jugadores from './components/Jugadores';
import EquipoSeleccionado from './components/EquipoSeleccionado';
import logo from './img/pelota.png';
import './css/index.css';

const App = () => (
  <Provider store={store}>
    <header className="header fixed-top">
      <img src={logo} height="50px"/>
      <h1> Once de gala</h1>
    </header>    
    <section className="row shaded-box">
      <section className="col-1-6">
        <Jugadores />
      </section>
      <section className="col-1-6">
        <EquipoSeleccionado />
      </section>
    </section>  
  </Provider>
)

export default App;
