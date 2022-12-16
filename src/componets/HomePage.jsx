import React, { Component } from "react";
import Guest from "./Guest";
import Hero from "./Hero";
import Highlight from "./Highlight";
import Event from "./Event";
import Footer from "./Footer";
import About from "./About";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Hero />
        <About/>
        <Event />
        <Guest />
        <Highlight />
        <Footer />
      </div>
    );
  }
}
