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
        <Navbar />
        <video
          className="absolute top-0 bottom-0 right-0 object-cover h-full -z-20 vid"
          loop
          autoPlay
          muted
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className=" bg-black/60 h-screen first">
          <section>
            <div className="py-1 text-white opacity-90">
              <div className="container flex items-center evr md:flex-row md:my-24">
                <div className="flex flex-col flex-shrink items-start justify-center mbox w-full pt-8 pl-4 lg:w-1/3">
                  <h1 className=" head1  flex w-full">
                    <span className="one">A</span>
                    <span className="one">S</span>
                    <span className="one">H</span>
                    <span className="one">W</span>
                    <span className="one">A</span>
                    <span className="one">M</span>
                    <span className="one">E</span>
                    <span className="one">D</span>
                    <span className="one">H</span>
                    <span className="one">A</span>
                  </h1>

                  {/* <div>
        <div className="container-glitch">
          <div className="glitch" data-text="ASHWAMEDHA">ASHWAMEDHA</div>
          <div className="glow">ASHWAMEDHA</div>
        </div>
      </div> */}
                  <h2 className="mb-2 text-3xl leading-relaxed md:text-2xl sm:text-xl md:leading-snug text1">
                    Space : The Timeless Infinity
                  </h2>
                  <p className="mb-4 text-sm md:text-base text-gray-50 text2">
                    Explore your favourite events and register now to showcase
                    your talent and win exciting prizes.
                  </p>
                  <a
                    href="/events"
                    alt="Register Now"
                    className="px-4 py-2 bg-transparent border rounded shadow text-neutral-content border-neutral-content hover:bg-neutral-content hover:text-black hover:shadow-lg hover:border-transparent"
                  >
                    Register Now
                  </a>
                </div>
                <div className="mt-12 mb-6 md:mb-0 md:mt-0 md:ml-12 lg:w-2/3">
                  <div className="flex  justify-end h-auto">
                    <img
                      src={Logo}
                      alt="Logo"
                      className="invert h-[60vh] w-[30vw] back"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* <Intro /> */}
      </>
    );
  }
}
