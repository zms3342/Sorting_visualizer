import React from 'react';
import './App.css';
import Menu from "./components/Menu"
import Visualizer from "./components/Visualizer"

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <h1>Sorting Algorithm Visualizer</h1>
      </div>

      <div className="app__main">
        <div className="app__menu">
          <Menu />
        </div>
        <div className="app__rectanglesWindow">
          <div className="app__array">
            <Visualizer />
           
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
