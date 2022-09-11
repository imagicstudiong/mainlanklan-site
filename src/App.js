import React, {useState} from 'react';
import Home  from './pages/index';
import About  from './pages/about';
import Services  from './pages/services';
import Journal  from './pages/journal';
import Shop  from './pages/shop';
import Contact  from './pages/contact';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
     const [isOpen, setIsOpen] = useState(false)

        const toggle = () =>{
        setIsOpen(!isOpen)
        }



  return (
    <div>
      <Router>
      <ScrollToTop />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/journal" element={<Journal />}/>
          <Route path="/shop" element={<Shop />}/>
          <Route path="/contact" element={<Contact />}/>
       
        </Routes>
         <Footer />

      </Router>
    </div>
  );
}

export default App;
