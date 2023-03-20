import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/contact" element={ <Contact/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);
