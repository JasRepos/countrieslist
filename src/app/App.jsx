import React from 'react';
import './App.css';
//import TestComponent from '../features/components/TextComponent'
//import CardListComponent from '../features/components/cards/CardListComponent';
import MainComponent from '../features/components/home/MainComponent';

function App() {
  return (
    <div className="App">
      <h1>LIST OF COUNTRIES</h1>
      <br/>
      <MainComponent/>
    </div>
  );
}

export default App;
