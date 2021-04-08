import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Error404 from './pages/Error404';
import Coagulacao from './pages/Coagulacao';
import Eta2 from './pages/Decantacao';
import Eta3 from './pages/Floculacao';
import Eta4 from './pages/Filtracao';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/home" component={Home} />
        <Route path="/coagulacao" component={Coagulacao}/>
        <Route path="/decantacao" component={Eta2} />
        <Route path="/floculacao" component={Eta3} />
        <Route path="/filtracao" component={Eta4} />
        <Route path='*' component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
