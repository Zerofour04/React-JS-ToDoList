import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/InputComponent';

function App() {
  const initdate = new Date();
  const [time, setTime] = useState(initdate.toString());

  const Uhrzeitanzeige = <h1>Time!</h1>;

  function bananenBrot() {
    const actualDate = new Date();
    setTime(actualDate.toString());
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo"/>
        <p><strong>
          <ins>ToDoList</ins>
        </strong>

        </p>
        <i>created by Zerofour</i>
        <a
          className="App-link"
          href="https://www.w3schools.com/default.asp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source
        </a>
      </header>

      <h1>ToDoList</h1>

      <Input />
      { Uhrzeitanzeige }
      <p>{ time }</p>
      <button type="button"
              onClick={ bananenBrot }>Show date and time
      </button>
      <h3>Checklist</h3>
    </div>
  );
}

export default App;
