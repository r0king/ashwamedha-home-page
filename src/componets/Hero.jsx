import React, { Component } from "react";
import bgVideo from "../assests/bgvideo.webm";
import Navbar from "./Navbar";
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
        <div className="h-screen bg-black/60 vid">

          <section>
            <div className="py-1 text-white opacity-90">
              <div className="container flex flex-col items-center evr md:flex-row md:my-24">
                <div className="flex flex-col items-start justify-center flex-shrink w-full pt-8 pl-4 mbox lg:w-5/6">
                  <svg viewBox="0 0 1320 300">
                    <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                      Ashwamedha
                    </text>
                  </svg>


                  
                  <h2 className="mb-2 text-3xl leading-relaxed md:text-2xl sm:text-xl md:leading-snug text1">Space : The Timeless Infinity
                  </h2>
                  <p className="mb-4 text-sm md:text-base text-gray-50 text2">Explore your favourite events and
                    register now to showcase your talent and win exciting prizes.</p>
                  <a href="#" className="px-4 py-2 bg-transparent border rounded shadow text-neutral-content border-neutral-content hover:bg-neutral-content hover:text-black hover:shadow-lg hover:border-transparent">
                    Register Now</a>

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