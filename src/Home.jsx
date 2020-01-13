import React from "react";

// HTML - stylowanie: <div id="new" style="background-color: green; color:bisque" >

// JSX - stylowanie: <div style={ { backgroundColor: 'blue',  color: 'yellow'} }>

class Home extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "blue", color: "yellow" }}>
        <h1>CZEŚĆ - ZACZYNAMY</h1>
      </div>
    );
  }
}

export default Home;
