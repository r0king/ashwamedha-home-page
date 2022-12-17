import React, { Component, useEffect, useState } from "react";
import Logo2 from "../assests/logo_crop.png";
import { useTransition, animated } from "@react-spring/web";
import aboutImg from "../assests/about.jpg";
import handleViewport from "react-in-viewport";

const AboutBlock = (props: { inViewport: boolean }) => {
  const { inViewport, forwardedRef } = props;
  const [isVisible, setVisible] = useState(false);
  const transition = useTransition(isVisible, {
    from: { x: -300, opacity: 0 },
    enter: { x: 0, opacity: 1 },
    delay: 300,
    leave: { x: -300, opacity: 0 },
    config: { duration: 300 },
  });
  if (inViewport && !isVisible) {
    setVisible(true);
  } else if (!inViewport && isVisible) {
    setVisible(false);
  }

  return (
    <div ref={forwardedRef}>
      {transition((style, item) =>
        item ? (
          <animated.div className="h-[85vh] w-full overflow-hidden" style={style}>
            <div className="lg:-mx-6 lg:flex lg:items-center justify-center flex-auto sm:flex sm:items-center p-4">
              <div className="lg:w-1/4 sm:w-1/2 lg:mx-6 w-full h-full rounded-lg lg:h-full sm:h-full ">
                <img
                  className="object-cover object-center rounded-lg "
                  src={aboutImg}
                  alt=""
                />
              </div>
              <div className="lg:w-1/2 lg:px-6 lg:mt-0 sm:w-1/2 sm:ml-6">
                <p className="text-3xl font-semibold text-justify text-orange-400 mt-2">
                  <span className="inline-block w-16 h-0.5 bg-orange-400  mb-2 mr-12" />
                  ABOUT US
                </p>
                <p className="text-5xl font-semibold text-justify text-white mt-2">
                  Who We Are
                </p>
                <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 text-justify">
                  “ Sunt nisi consequat cupidatat consequat adipisicing
                  consequat anim proident deserunt culpa pariatur adipisicing
                  excepteur. Irure elit ullamco eiusmod reprehenderit do non.
                  Lorem cillum laboris amet sint minim. Amet quis exercitation
                  in elit. Tempor culpa aute aliqua nostrud Lorem aliqua veniam
                  do minim incididunt tempor. Irure enim deserunt labore nulla
                  cillum incididunt reprehenderit exercitation. Laboris fugiat
                  aliquip Lorem in id consectetur culpa nisi laborum id. Id elit
                  non officia id irure do aute consectetur aute dolor commodo
                  dolore non. Do laboris Lorem amet eiusmod enim dolor ut
                  officia nulla Lorem quis ex nisi ex. Amet labore amet pariatur
                  proident tempor nostrud non nostrud ipsum quis culpa dolor
                  fugiat nostrud. Aliquip minim sunt sunt esse esse. Consectetur
                  voluptate do eiusmod nostrud non deserunt amet aliquip
                  cupidatat sit.
                </p>
                <a href="#">
                  <p className="text-xl font-semibold">
                    <span className="inline-block w-0.5 h-4 bg-orange-400 rounded-full mt-4 mr-4" />
                    READ MORE
                    <span className="inline-block w-0.5 h-4 bg-orange-400 rounded-full mt-4 ml-4" />
                  </p>
                </a>
              </div>
            </div>
          </animated.div>
        ) : (
          <div className="h-[85vh]"></div>
        )
      )}
    </div>
  );
};
const ViewportBlock = handleViewport(AboutBlock /* options: {}, config: {} */);
const About = (props) => {
  return (
    <div>
      <ViewportBlock />
    </div>
  );
};

export default About;
