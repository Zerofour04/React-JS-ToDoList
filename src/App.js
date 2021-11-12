import React from 'react';
import './App.css';
import Input from './components/InputComponent'
import Header from './components/Header'
import Clock from './components/TimeComponent'

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>ToDoListe</h1>
      <Clock/>
      <Input/>
    </div>
  );
}

export default App;
