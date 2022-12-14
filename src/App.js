import logo from "./logo.svg";
import "./App.css";
import "animate.css/animate.min.css";
import Card from "./componets/Card";
import Install from "./componets/Install";
import Hero from "./componets/Hero";
import Event from "./componets/Event";
import Highlight from "./componets/Highlight";
import Footer from "./componets/Footer";
import Guest from "./componets/Guest";

function App() {
  return (
  <div>
    <Hero/>
    <Event/>
    <Guest/>
    <Highlight/>
    <Footer/>
  </div>
  );
}

export default App;
