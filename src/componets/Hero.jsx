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
        <div className="h-full bg-black/60 vid">

          <section>
            <div className="py-1 text-white opacity-90">
              <div className="container flex flex-col items-center evr md:flex-row md:my-24">
                <div className="flex flex-col items-start justify-center flex-shrink w-full pt-8 pl-4 mbox lg:w-5/6">
                  <svg viewBox="0 0 1320 300">
                    <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                      Ashwamedha
                    </text>
                  </svg>


                  {/* <div>
        <div className="container-glitch">
          <div className="glitch" data-text="ASHWAMEDHA">ASHWAMEDHA</div>
          <div className="glow">ASHWAMEDHA</div>
        </div>
      </div> */}
                  <h2 className="mb-2 text-3xl leading-relaxed md:text-2xl sm:text-xl md:leading-snug text1">Space : The Timeless Infinity
                  </h2>
                  <p className="mb-4 text-sm md:text-base text-gray-50 text2">Explore your favourite events and
                    register now to showcase your talent and win exciting prizes.</p>
                  <a href="#" className="px-4 py-2 bg-transparent border rounded shadow text-neutral-content border-neutral-content hover:bg-neutral-content hover:text-black hover:shadow-lg hover:border-transparent">
                    Register Now</a>

                </div>
                {/*<div className="justify-center mt-12 mb-6 ml-10 pl-60 md:mb-0 md:mt-0 md:ml-12 lg:w-2/3 ">
        <div className="flex flex-wrap content-center h-48">
          <div>
            <img className="hidden inline-block mt-28 xl:block" src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png" /></div>
          <div>
            <img className="inline-block p-8 mt-24 md:mt-0 md:p-0" src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png" /></div>
          <div>
            <img className="hidden inline-block mt-28 lg:block" src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png" /></div>
        </div>
    </div>*/}
              </div>
            </div>
          </section>

        </div>
        {/* <Intro /> */}
      </>
    );
  }
}