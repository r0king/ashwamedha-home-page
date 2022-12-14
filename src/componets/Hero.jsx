import React, { Component } from "react";
import bgVideo from "../assests/bgvideo.webm";
import Navbar from "./Navbar";
import Logo from "../assests/logo.png";
export default class Hero extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <>
        <Navbar />
        <div>
          <video
            width={window.innerWidth}
            className="right-0 bottom-0 top-0 min-h-[100%] min-w-[100%] absolute -z-20"
            loop
            autoPlay
            muted
          >
            <source src={bgVideo} type="video/mp4" />
          </video>
          <div
            width={window.innerWidth}
            className="h-[80vh] bg-black/[0.7] z-10 lg:h-[100vh]"
          >
            <div className="flex justify-between flex-col md:flex-row">
              <img
                src={Logo}
                alt=""
                className="invert w-1/2 pt-[20vh] pl-[5vw] lg:w-1/3"
              />
              <div className="flex flex-col justify-center">
                  asdfasdfasdf
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
