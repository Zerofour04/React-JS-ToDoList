import React from 'react';
import './App.css';
import Input from './components/InputComponent'
import Header from './components/Header'
import Time from './components/TimeComponent'

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>ToDoListe</h1>
      <Input/>
      <Time/>
    </div>
  );
}

export default App;
