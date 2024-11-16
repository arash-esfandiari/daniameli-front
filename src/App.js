import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Layout
import { Footer } from './components/Footer';
// pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import ScrollToTop from './components/Gotop';


function App() {

  return (
    <div className="page">
      <Router>
        <div id="preloader">
          <div id="status">&nbsp;</div>
        </div>
        <ScrollToTop />
        <Route exact path='/' component={Home} />
        <Route path="/about" component={AboutUs} />
        <Route path="/contacts" component={ContactUs} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;


