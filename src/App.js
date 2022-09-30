import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from "./components/pages/Home"
import Menu from "./components/pages/Menu"
import About from "./components/pages/About"
import Contact from "./components/pages/Contact"
import Header from "./components/partials/Header"

import './App.css';

export default function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>





  );
}


