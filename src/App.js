import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import LoginContainer from './components/Login/LoginContainer';
import EcpBaseContainer from './components/EcpBase/EcpBaseContainer';

function App(props) {
     return (
                <div className="App">
                    <Header />
                    <div className="split"></div>
                    <Route exact path='/' render = { () => <Home /> } />
                    <Route path='/ecp-base' render={ () => <EcpBaseContainer /> }/>
                    <Route path='/login' render={ () => <LoginContainer /> }/>
                </div>

            );
}

export default App;
