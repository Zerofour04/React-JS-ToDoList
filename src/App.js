import React from 'react';
import './App.css';
import Input from './components/InputComponent'
import Header from './components/Header'
import Clock from './components/TimeComponent'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

function App() {

    return (
        <div className="App">

            <Router>
                <Link to="/header" className="top-button">Header</Link>
                <Link to="/input" className="top-button">Tasks</Link>
                <Link to="/clock" className="top-button">Time</Link>

                <Route path="/header">
                    <Header/>
                </Route>
                <Route path="/clock">
                    <Clock/>
                </Route>
                <Route path="/input">
                    <Input/>
                </Route>
            </Router>

        </div>
    );
}

export default App;
