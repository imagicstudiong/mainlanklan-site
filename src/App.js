import React from 'react';

import Home  from './pages/index';
import Mainlanklan  from './pages/mainlanklan';
import Artists  from './pages/artists';
import Services  from './pages/services';
import Journal  from './pages/journal';
import Shop  from './pages/shop';
import Contact  from './pages/contact';
import Privacy  from './pages/privacy';
import Terms  from './pages/terms';
import Header from "./components/Header";
import ScrollToTop from './components/ScrollToTop';

import Footer from "./components/Footer";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";





function App() {
  return (
   <>
    <div>
      <Router>
     <ScrollToTop />
      
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/mainlanklan" element={<Mainlanklan />}/>
          <Route path="/artists" element={<Artists />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/journal" element={<Journal />}/>
          <Route path="/shop" element={<Shop />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/privacy" element={<Privacy />}/>
          <Route path="/terms" element={<Terms />}/>



        </Routes>

        <Footer />
      </Router>
    </div>
   </>
  );
}

export default App;
