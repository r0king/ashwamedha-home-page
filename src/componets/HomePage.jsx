import React, { Component } from "react";
import Guest from "./Guest";
import Hero from "./Hero";
import Highlight from "./Highlight";
import EventCarousel from "./EventCarousel";
import Footer from "./Footer";
import About from "./About";
import "./Carousel.module.css";
import Navbar from "./Navbar";
export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.refGuest = React.createRef();
    this.refHigh = React.createRef();
    this.refContact = React.createRef();
    this.refAbout = React.createRef();
    this.refEvent = React.createRef();
  }
  render() {
    return (
      <div>
        <Navbar
          refAbout={this.refAbout}
          refGuest={this.refGuest}
          refHigh={this.refHigh}
          refContact={this.refContact}
          refEvent={this.refEvent}          
        />
        <Hero />
        <About refAbout={this.refAbout} />
        <EventCarousel refEvent={this.refEvent} />
        <Guest refGuest={this.refGuest} />
        <Highlight refHigh={this.refHigh} />
        <Footer refContact={this.refContact} />
      </div>
    );
  }
}
