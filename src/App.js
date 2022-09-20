import React from "react";

import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Event from "./components/Event/Event";


function App() {
  return (
    <Router>
      <Navigation />

        <Routes>
          {/* <Route path="/intro" element={<Intro />}>
          </Route> */}
          {/* <Route path="/music">
            <Music />
          </Route>
          <Route path="/feedback">
            <Feedback />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route> */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/event" element={<Event />}></Route>

            
          
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
