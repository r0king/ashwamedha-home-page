import React, { Component } from "react";
import bgVideo from "../assests/bgvideo.webm";
import Navbar from "./Navbar";
import Logo from "../assests/logo_crop.png";
export default class Hero extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <>
        <Navbar />
          <video
            className="absolute top-0 bottom-0 right-0 object-cover -z-20"
            loop
            autoPlay
            muted
          >
            <source src={bgVideo} type="video/mp4" />
          </video>
        <div className=" bg-black/60"> 
          <div
            width={window.innerWidth}
            className="h-[80vh]  z-10 lg:h-[100vh]"
          >
            <div className="flex flex-row justify-between opacity-60 md:flex-row">
              <img
                src={Logo}
                alt=""
                className="invert w-1/2 pt-[20vh] pl-[5vw] lg:w-1/3 sm:w-1/5 h-1/3"
              />
              <h1 className="font-mono font-semibold text-7xl mx-[15vh] my-[35vh]">ASHWAMEDHA '22</h1>
              
              </div>
          </div>
        </div>
      </>
    );
  }
}
