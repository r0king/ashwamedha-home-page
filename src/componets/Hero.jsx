import React, { Component } from "react";
import bgVideo from "../assests/bgvideo.webm";
// import Intro from "./Intro";
import logoImg from "../assests/logo_crop.png";
import CountDown from "./CountDown";

export default class Hero extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <>
        <video
          className="absolute top-0 bottom-0 right-0 object-cover h-full -z-20 vid"
          loop
          autoPlay
          muted
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="h-screen bg-black/60 vid">
          <section>
            <div className="py-1 text-white opacity-90">
              <div className="container flex flex-col items-center evr md:flex-row md:my-[10vh]">
                <div className="lg:m-10-4 flex flex-col lg:justify-start h-[85vh] pb-20 md:pb-0 justify-center flex-shrink w-full lg:pt-0 pt-8 pl-4 mbox lg:w-5/6">
                  <svg viewBox="0 0 1320 300" className="h-auto">
                    <text x="50%" y="50%" dy=".35em" textAnchor="middle">
                      Ashwamedha' 22
                    </text>
                  </svg>
                  <CountDown />

                  <h2 className="mb-2 text-3xl leading-relaxed md:text-2xl sm:text-xl text-center md:text-left w-full md:leading-snug text1">
                    The Stallion Rises!
                  </h2>
                  <p className="mb-4 text-lg md:text-base text-gray-50 text2 text-center md:text-left">
                    Explore your favourite events and register now to showcase
                    your talent and win exciting prizes.
                  </p>
                  <div className="flex md:justify-start justify-center w-full">
                    <a
                      href="/#/events"
                      className="px-4 py-2 bg-transparent border rounded shadow text-neutral-content border-neutral-content hover:bg-neutral-content hover:text-black hover:shadow-lg hover:border-transparent"
                    >
                      Register Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* this is put an image as a watermark for this page */}

        <img
          src={logoImg}
          className="fixed invert m-auto top-0 left-0 bottom-0 right-0 -z-10 opacity-20 h-[50vh]"
          alt="ashwamedha"
        />

        {/* <Intro /> */}
      </>
    );
  }
}
