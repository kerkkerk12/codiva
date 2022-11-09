import './css/App.css'
import './css/Authen.css'
import React from 'react'
import {Routes, Route, NavLink, BrowserRouter } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'
import Error from './components/Error'


function App() {

  let activeClassName = "nav-active"
  return (
    <BrowserRouter>
      <header>
        <h1>The Codediva!</h1>
      </header>
      <nav>
        <NavLink end to="/" className={({isActive}) => isActive ? activeClassName : undefined}>Home</NavLink>
        <NavLink to="/register" className={({isActive}) => isActive ? activeClassName : undefined}>Register</NavLink>
        <NavLink to="/login" className={({isActive}) => isActive ? activeClassName : undefined}>Login</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element ={<Register />} />
        <Route path="/login" element ={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
