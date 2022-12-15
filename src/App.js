import React from "react";
import "./App.css";
import "animate.css/animate.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EventDetails from "./componets/EventDetails";
import HomePage from "./componets/HomePage";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route exact path="/:name/" element={<EventDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
