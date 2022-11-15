import "./css/App.css";
import "./css/Authen.css";
import React, { Component } from "react";
import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Error from "./components/Error";
import Nav from "./components/Nav";
import { AuthProvider } from "./components/Auth";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
