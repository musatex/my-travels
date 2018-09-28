import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">"Tour du monde"!</h1>
        </header>
          <Travel
            destination="destination du rêve"
            country= "Mexique"
            distance="9 184 Km"
            photo="http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/67/61/p067619b.jpg"
          />
          <Travel
            destination="destination du rêve"
            country= "Guatemala"
            distance="8 926 Km"
            photo="https://media.mv.urlaubspiraten.de/images/2016/12/585d816ddcce31436047603cq1iru4.jpg"
          />
	     </div>
    );
  }
}

export default App;
