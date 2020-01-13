import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
//import Login from './Views/Login';
//import Home from './Views/Home';
//import './App.css'
//import AuthLoader from './Components/AuthLoader';

class Geolocation extends React.Component {
  constructor() {
    super();

    this.state = {
      lat: null,
      errorMessage: ""
    };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },

      

      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <Container>Error: {this.state.errorMessage};</Container>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <Container>Latitude: {this.state.lat};</Container>;
    }

    return <Container>Loading!!!</Container>;
  }
}

export default Geolocation;
