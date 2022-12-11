import logo from "./logo.svg";
import "./App.css";
import "animate.css/animate.min.css";
import Card from "./componets/Card";
import Install from "./componets/Install";
import Hero from "./componets/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/hero" element={<Hero/>}/>
        <Route path="/ex" element={<Card/>}/>
        <Route exact path="/:name/" element={<Install />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
