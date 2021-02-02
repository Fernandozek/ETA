import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Error404 from './pages/Error404';
import Eta1 from './components/Home/ETA1';
import Eta2 from './components/Home/ETA2';
import Eta3 from './components/Home/ETA3';
import Eta4 from './components/Home/ETA4';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <Route path="/coagulacao" component={Eta1} />
        <Route path="/decantacao" component={Eta2} />
        <Route path="/floculacao" component={Eta3} />
        <Route path="/filtracao" component={Eta4} />
        <Route path='*' component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
