import React, { Component } from "react";
import bgVideo from "../assests/bgvideo.webm";
import Navbar from "./Navbar";
import Logo from "../assests/logo_crop.png";
// import Intro from "./Intro";
export default class Hero extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <>
        {/* <Navbar /> */}
        {/* <video
          className="absolute top-0 bottom-0 right-0 object-cover h-full -z-20 vid"
          loop
          autoPlay
          muted
        >
          <source src={bgVideo} type="video/mp4" /> */}
        {/* </video> */}
        <h1 class="logo">
          <span class="ll">7</span>
          <span class="ll">O</span>
          <span class="ll">c</span>
          <span class="ll">e</span>
          <span class="ll">a</span>
          <span class="ll">n</span>
          <span class="ll">s</span>
          <span class="ll">.</span>
        </h1>

        <div class="hero">
          <img
            src="https://www.americanoceans.org/wp-content/uploads/2021/06/shutterstock_1807037047-scaled.jpg"
            class="hero_img"
          />
          <div class="hero_content">
            <h2 class="hero_title">
              Time wasted at the beach is time well spent.
            </h2>
            <button class="hero_btn">Explore</button>
          </div>
        </div>
      </>
    );
  }
}
