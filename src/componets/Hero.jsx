import React, { Component } from "react";
import bgVideo from "../assests/bgvideo.webm";
import Navbar from "./Navbar";

export default class Hero extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <>
      <Navbar/>
        <div>
        <video
          width={window.innerWidth}
          className="right-0 bottom-0 top-0 min-h-[100%] min-w-[100%]"
          loop
          autoPlay
          muted
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        </div>
      </>
    );
  }
}
