import React, { Component } from "react";
import "./App.css";
import "animate.css/animate.min.css";
import AllEvents from "./componets/AllEvents";
import { HashRouter, Route, Routes } from "react-router-dom";
import EventDetails from "./componets/EventDetails";
import HomePage from "./componets/HomePage";
import About from "./componets/About";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage  />} />
          <Route path="/events" element={<AllEvents />} />
          <Route exact path="/about" element={<About more={true}/>} />
          <Route path="/:name/" element={<EventDetails />} />
        </Routes>
      </HashRouter>
    );
  }
}

export default App;
