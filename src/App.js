import React from "react";
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Home from "./componentes/Home";
import Chats from "./componentes/Chats";
import Contactos from "./componentes/Contactos";
import Info from "./componentes/Info";
import Perfil from "./componentes/Perfil";
import PageNotFound from "./componentes/PageNotFound"


function App() {
  return (
    <Router>
      <div className="Container">
        <nav className="navbar navbar-dark bg-dark">
        <img src={logo} className="App-logo" alt="logo"/>
        <Link to="/perfil" className="text-white">Mi Perfil</Link>
          <div className="btn-group">
            <NavLink to="/" className="btn btn-dark" activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/contactos" className="btn btn-dark" activeClassName="active"> 
              Contactos
            </NavLink>
            <NavLink to="/chats" className="btn btn-dark" activeClassName="active">
              Chats
            </NavLink>
            <NavLink to="/info" className="btn btn-dark" activeClassName="active">
              Info
            </NavLink>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/contactos" component={Contactos}/>
          <Route exact path="/chats" component={Chats}/>
          <Route exact path="/info" component={Info}/>
          <Route exact path="/perfil" component={Perfil}/>
          <Route component={PageNotFound}/>
        </Switch>  
      </div>
    </Router>
  );
}
export default App;
