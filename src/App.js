import React from 'react';
import './App.css';
import Visualizer from "./components/Visualizer"
import Header from "./components/Header"

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__visualizer">
        <Visualizer />
      </div>
    </div>
  );
}

export default App;
