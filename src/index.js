// Core
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
// Estilos
import './index.css';
// Componentes
import Home from './pages/Home';
import Password from './pages/Password';
// PWA
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Home}></Route>
    <Route path="/new" component={Home}></Route>
    <Route path="/password" component={Password}></Route>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
