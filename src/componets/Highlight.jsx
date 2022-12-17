// import React, { Component } from 'react';
// class Highlight extends Component {
// 	render() {
// 		return (
// 			<div>
// 				<section className="p-4 lg:p-8 dark:text-gray-100">
// 						<h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
// 							Highlights
// 						</h1>
// 						<div className="flex justify-center mx-auto mt-6 mb-10">
// 							<span className="inline-block w-40 h-1 bg-neutral-content rounded-full" />
// 							<span className="inline-block w-3 h-1 mx-1 bg-neutral-content rounded-full" />
// 							<span className="inline-block w-1 h-1 bg-neutral-content rounded-full" />
// 						</div>
// 						<div className="container mx-auto space-y-24">
// 							<div className="flex flex-col overflow-hidden  lg:flex-row">
// 								<img src="https://source.unsplash.com/640x480/?1" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
// 								<div className="flex flex-col justify-center flex-1 p-6 ">
// 									<span className="text-xs uppercase text-neutral-content">Join, it's free</span>
// 									<h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
// 									<p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
// 									<button type="button" className="self-start text-neutral-content">Action</button>
// 								</div>
// 							</div>
// 							<div className="flex flex-col overflow-hidden lg:flex-row-reverse">
// 								<img src="https://source.unsplash.com/640x480/?2" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
// 								<div className="flex flex-col justify-center flex-1 p-6 ">
// 									<span className="text-xs uppercase text-neutral-content">Join, it's free</span>
// 									<h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
// 									<p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
// 									<button type="button" className="self-start text-neutral-content">Action</button>
// 								</div>
// 							</div>
// 							<div className="flex flex-col overflow-hidden lg:flex-row">
// 								<img src="https://source.unsplash.com/640x480/?3" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
// 								<div className="flex flex-col justify-center flex-1 p-6 ">
// 									<span className="text-xs uppercase text-neutral-content">Join, it's free</span>
// 									<h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
// 									<p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
// 									<button type="button" className="self-start text-neutral-content">Action</button>
// 								</div>
// 							</div>
// 						</div>
// 				</section>
// 			</div>
// 		);
// 	}
// }

// export default Highlight;
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
          <animated.div
            className="h-[85vh] w-full overflow-hidden"
            style={style}
          >
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

const Highlight = (props) => {
  return (
    <div>
      <ViewportBlock />
    </div>
  );
};

export default Highlight;
