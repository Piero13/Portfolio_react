import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

/*pages import*/
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';

/*components import*/
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

/*scss import*/
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/contact" element={ <Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
);
