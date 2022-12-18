import React, { Component, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import handleViewport from "react-in-viewport";
import bgVideo from "../assests/bgvideo.webm";
import { useEffect } from "react";
import logoImg from "../assests/logo_crop.png";
import { Spring } from "react-spring";

const Intro = () => {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 1000, duration: 1000 }}
    >
      {(props) => (
        <div className=" w-full" style={{ props }}>
          <div className="flex justify-center absolute z-50 h-[110vh] top-0 right-0 left-0 bottom-0 bg-black p-40">
            <img src={logoImg} alt="" className="invert" />
          </div>{" "}
        </div>
      )}
    </Spring>
  );
};

export default Intro;
