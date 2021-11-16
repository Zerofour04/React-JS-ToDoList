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
    {/*<i>from Ben</i>*/}
    <a
      className="virus"
      href="https://youtu.be/iik25wqIuFo"
      target="_blank"
      rel="noopener noreferrer"
    >
      V1rus
    </a>
    {/*<p></p>*/}
    {/*<div className="perspective-text">*/}
    {/*  <div className="perspective-line">*/}
    {/*    <p></p>*/}
    {/*    <p>von</p>*/}
    {/*  </div>*/}
    {/*  <div className="perspective-line">*/}
    {/*    <p>ARS</p>*/}
    {/*    <p>Ben</p>*/}
    {/*  </div>*/}
    {/*  <div className="perspective-line">*/}
    {/*    <p>Modern Web</p>*/}
    {/*    <p>David</p>*/}
    {/*  </div>*/}
    {/*  <div className="perspective-line">*/}
    {/*    <p>Abteilung 2</p>*/}
    {/*    <p>Dinko</p>*/}
    {/*  </div>*/}
    {/*  <div className="perspective-line">*/}
    {/*    <p>Praktikum</p>*/}
    {/*    <p>Sven</p>*/}
    {/*  </div>*/}
    {/*</div>*/}
    </header>
  )
}

export default Header;