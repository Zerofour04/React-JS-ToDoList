import React from 'react';
import logo from '../logo.svg';

const Header = () => {
  return (
  <header className="App-header">
    <img src={ logo } className="App-logo" alt="logo"/>
    <p><strong>
      <ins>ToDoList</ins>
    </strong>
    </p>
    <i>created by Zerofour</i>
    <a
      className="App-link"
      href="https://youtu.be/iik25wqIuFo"
      target="_blank"
      rel="noopener noreferrer"
    >
      V1rus
    </a>
    <p></p>
  </header>
  )
}

export default Header;