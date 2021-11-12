import React from 'react';
import './App.css';
import Input from './components/InputComponent'
import Header from './components/Header'
// import clock from './components/TimeComponent'

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>ToDoList</h1>
      <Input/>
      <clock/>
    </div>
  );
}

export default App;
