import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
//import Login from './Views/Login';
import Home from "./Home";
//import './App.css'
import Geolocation from "./Geolocation";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Container>
          <Switch>
            <Route path="/geo" component={Geolocation}></Route>
            <Route path="/" component={Home} />
          </Switch>
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
