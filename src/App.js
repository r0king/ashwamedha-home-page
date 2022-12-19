import React from "react";
import "./App.css";
import "animate.css/animate.min.css";
import AllEvents from "./componets/AllEvents";
import { HashRouter, Route, Routes } from "react-router-dom";
import EventDetails from "./componets/EventDetails";
import HomePage from "./componets/HomePage";
import About from "./componets/About";

function App() {
  return (
    <HashRouter >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<AllEvents/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/:name/" element={<EventDetails />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
