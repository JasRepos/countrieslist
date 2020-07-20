import React from 'react';
import './App.css';
//import TestComponent from '../features/components/TextComponent'
//import CardListComponent from '../features/components/cards/CardListComponent';
import MainComponent from '../features/components/home/MainComponent';
import FlagTest from '../features/components/testarea/FlagTest';

function App() {
  return (
    <div className="App">
      <FlagTest/>
      <br/>
      <h1>LIST OF COUNTRIES</h1>
      <br/>
      <MainComponent/>
    </div>
  );
}

export default App;
