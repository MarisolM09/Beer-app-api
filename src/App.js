import React, { Component } from "react";
import Beers from "./Beers"

import './App.css';
import List from "./List"

class App extends Component {
  constructor() {
    super();
    this.state = {
      beers: [],
    };
  }

  componentDidMount() {
    console.log("I mounted");
    fetch("https://api.punkapi.com/v2/beers")
    .then((resolve) => resolve.json())
    .then((data) => {
      this.setState({
        beers: data,
      });
    });
  }

  componentDidUpdate() {
    console.log("I updated")
  }
 
  render() {
    return (
      <div className="App">
       <h2>Beers</h2>
        <Beers beers={this.state.beers}/>
        <h2>Other Beers</h2>
        <List list={this.state.beers}/>
      </div>
    );
  }
  
}



export default App;
