import React, { Component } from "react";
import Guest from "./Guest";
import Hero from "./Hero";
import Highlight from "./Highlight";
import EventCarousel from "./EventCarousel";
import Footer from "./Footer";
import About from "./About";
import "./Carousel.module.css"
export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Hero />
        <About/>
        <EventCarousel />
        <Guest />
        <Highlight />
        <Footer />
      </div>
    );
  }
}
