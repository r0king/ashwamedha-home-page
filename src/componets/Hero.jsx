import React, { Component } from "react";
import bgVideo from "../assests/bgvideo.webm";

export default class Hero extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="">
        asdfasdf
        <video
          width={window.innerWidth}
          className="fixed right-0 bottom-0 min-h-[100%] min-w-[100%] "
          loop
          autoPlay
          muted
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
      </div>
    );
  }
}
