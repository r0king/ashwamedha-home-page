import React, { useState } from "react";
import { useTransition, animated } from "@react-spring/web";
import aboutImg from "../assests/about.jpg";
import handleViewport from "react-in-viewport";

const AboutBlock = (props: inViewport) => {
  const { inViewport, forwardedRef } = props;
  const [isVisible, setVisible] = useState(false);
  const transition = useTransition(isVisible, {
    from: { x: -300, opacity: 0 },
    enter: { x: 0, opacity: 1 },
    delay: 300,
    config: { duration: 300 },
  });
  if (inViewport && !isVisible) {
    setVisible(true);
  } else if (!inViewport && isVisible) {
    setVisible(false);
  }

  return (
    <div ref={forwardedRef} id="about">
      
      {transition((style, item) =>
        item ? (
          <animated.div
            className="md:h-[85vh] w-full overflow-hidden "
            style={style}
          >
            <div className="flex flex-col justify-center h-full">
              <div className="justify-center flex-auto p-4 lg:-mx-6 lg:flex lg:items-center sm:flex sm:items-center">
                <div className="flex flex-col justify-center w-full h-full rounded-lg lg:w-1/4 sm:w-1/2 lg:mx-6 lg:h-full sm:h-full">
                  <img
                    className="object-cover object-center rounded-lg "
                    src={aboutImg}
                    alt=""
                  />
                </div>
                <div id="about" className="lg:w-1/2 lg:px-6 lg:mt-0 sm:w-1/2 sm:ml-6">
                  <p className="mt-2 text-3xl font-semibold text-justify text-orange-400">
                    <span className="inline-block w-16 h-0.5 bg-orange-400  mb-2 mr-12" />
                    ABOUT US
                  </p>
                  <p className="mt-2 text-5xl font-semibold text-justify text-white">
                    Who We Are
                  </p>
                  <p className="max-w-lg mt-6 text-justify text-gray-500 dark:text-gray-400 text-lg">
                    Ashwamedha is the annual National level Technical fest of Adi Shankara Institute of Engineering and Technology.
                    Previously hosted with much grandeur, Ashwamedha 2019 was lauded for its magnificent poise.
                    Now, 3 years later, after all the hustle and bustle of the pandemic, Ashwamedhs 2022 is all set to bring forth a bewildering experience for all.
                    This year's fest will feature a wide array of exciting competitions and informative workshops spread across various technical disciplines.
                    Ashwamedha'22 will be a one day evebt conducted for all engineering students all over India.
                    Ashwamedha is the perfect way to jazz up the technical skills of a student in a creative way.
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
    <div className="mt-12 md:mt5">
      <ViewportBlock />
    </div>
  );
};

export default About;
