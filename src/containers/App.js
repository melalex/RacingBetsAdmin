import React, { Component } from 'react';
import '../../styles/App.css';
import ReactRouter from "react-router/es/Router";

let Router = ReactRouter.Router;
let Route = ReactRouter.Route;
let IndexRoute = ReactRouter.IndexRoute;
let browserHistory = ReactRouter.browserHistory;

class App extends Component {
  render() {
    return (
      <Router history="browserHistory">
          <Route path="/" component={}>

          </Route>
      </Router>
    );
  }
}

export default App;
