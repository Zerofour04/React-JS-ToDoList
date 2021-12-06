import React from 'react';
import logo from '../logo.svg';

const Header = () => {
  return (
  <header className="App-header">
    <img src={ logo } className="App-logo" alt="logo"/>
    <p><strong>
      <ins className="ins">ToDoListe</ins>
    </strong>
    </p>
    <a
      className="virus"
      href="https://youtu.be/iik25wqIuFo"
      target="_blank"
      rel="noopener noreferrer"
    >
      V1rus
    </a>
    </header>
  )
}

export default Header;