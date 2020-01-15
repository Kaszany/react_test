import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
//import Login from './Views/Login';
//import Home from './Views/Home';
//import './App.css'
//import AuthLoader from './Components/AuthLoader';

class Thundercounter extends React.Component {
  constructor() {
    super();

    this.state = {
      counter: 0
    };

    this.count = this.count.bind(this) // musi być ta linia bo wali błędem


  }

componentDidMount = () => {

    setInterval(this.count, 1000);


}


count = () => {

this.setState ({ counter: this.state.counter + 100})

}



  render() {

      var thunderStyle =
      {
          backgroundColor: "yellow",
          width: 100,
          height: 100,
          margin: "auto",
          display: "flex",
          justifyContent: "center",  /* pion */
          alignItems: "center" 
          //position: "relative"
      }

    return <div style={thunderStyle}>Thunder counter (from app start): {this.state.counter}</div>;
  }
}

export default Thundercounter;
