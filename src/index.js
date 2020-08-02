// Core
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//const renderLoader = () => <p>Loading</p>;
// Estilos
import './index.css';

// Componentes
import Home from './components/Home';
import Password from './components/Password';
import Navbar from './layouts/Navbar';

// PWA
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div>
    <Suspense>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/password" component={Password} />
        </Switch>
      </Router>
    </Suspense>
  </div>,
  document.getElementById('root')
);

serviceWorker.unregister();
