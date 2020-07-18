import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import React from 'react';

import configureStore from "./redux/store/";
import ROUTES from "./routes/index";
import Home from './components/Home';
import './App.css';


const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

function App() {
  return (
    <ReduxProvider store={reduxStore}>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path={ROUTES.APP.ROOT}>
              <Home />
            </Route>
            <Route path={ROUTES.APP.ROUTER.FEED}>
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </ReduxProvider>
  );
}

export default App;
