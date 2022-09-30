import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from "./components/pages/Home"
import Menu from "./components/pages/Menu"
import About from "./components/pages/About"
import Contact from "./components/pages/Contact"

import './App.css';

export default function App() {
  return (
    <div className="App">
      App
      <Home />
      <Menu />
      <About />
      <Contact />
    </div>
  );
}


