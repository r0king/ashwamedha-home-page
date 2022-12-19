import React, { useState } from "react";
import { useTransition, animated } from "@react-spring/web";
import aboutImg from "../assests/about.jpg";
import handleViewport from "react-in-viewport";
import { useParams } from "react-router-dom";
import { Component } from "react";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

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
          <animated.div className="w-full overflow-hidden " style={style}>
            <AboutContent />
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
  
  if (!props.more) {
    return (
      <div className="mt-12 md:mt5" ref={props.refAbout}>
        <ViewportBlock />
      </div>
    );
  } else {
    return (
      <div ref={props.refAbout}>
        <AboutContent more={true} />
      </div>
    );
  }
};

export default withParams(About);
class AboutContent extends Component {
  render() {
    return (
      <div className="flex flex-col justify-center h-full overflow-x-hidden">
        <div className="justify-center flex-auto p-4 lg:-mx-6 lg:flex lg:items-center sm:flex sm:items-center">
          <div
            className={
              this.props.more
                ? "flex flex-col justify-center w-full h-full rounded-lg lg:w-1/4 sm:w-1/2 lg:mx-6 lg:h-full sm:h-full "
                : "flex flex-col justify-center w-full h-full rounded-lg lg:w-1/4 sm:w-1/2 lg:mx-6 lg:h-full sm:h-full"
            }
          >
            <div
              className={
                this.props.more
                  ? "object-cover w-full object-center rounded-lg md:fixed md:left-5 md:w-[350px] top-0 md:m-5 bottom-0 flex flex-col justify-center"
                  : ""
              }
            >
              <img
                className={
                  this.props.more
                    ? "object-cover object-center rounded-lg "
                    : "object-cover object-center rounded-lg "
                }
                src={aboutImg}
                alt=""
              />
            </div>
          </div>
          <div id="about" className="lg:w-1/2 lg:px-6 lg:mt-0 sm:w-1/2 sm:ml-6">
            <p className="mt-2 text-3xl font-semibold text-justify text-neutral-content">
              <span className="inline-block w-16 h-0.5 bg-neutral-content  mb-2 mr-12" />
              ABOUT US
            </p>
            <p className="mt-2 text-5xl font-semibold text-justify text-white">
              Who We Are
            </p>
            <div className="max-w-[50 rem] mt-6 text-lg text-justify text-gray-500 dark:text-gray-400">
              <p> 
                Ashwamedha is the annual National level Technical fest of Adi
                Shankara Institute of Engineering and Technology. Previously
                hosted with much grandeur, Ashwamedha 2019 was lauded for its
                magnificent poise. Now, 3 years later, after all the hustle and
                bustle of the pandemic, Ashwamedha 2022 is all set to bring
                forth a bewildering experience for all. This year's fest will
                feature a wide array of exciting competitions and informative
                workshops spread across various technical disciplines.
                Ashwamedha'22 will be a one day evebt conducted for all
                engineering students all over India. Ashwamedha is the perfect
                way to jazz up the technical skills of a student in a creative
                way.
              </p>
              {/* {this.props.more && (
                <p>
                  Ashwamedha is the annual National level Technical fest of Adi
                  Shankara Institute of Engineering and Technology. Previously
                  hosted with much grandeur, Ashwamedha 2019 was lauded for its
                  magnificent poise. Now, 3 years later, after all the hustle
                  and bustle of the pandemic, Ashwamedhs 2022 is all set to
                  bring forth a bewildering experience for all. This year's fest
                  will feature a wide array of exciting competitions and
                  informative workshops spread across various technical
                  disciplines. Ashwamedha'22 will be a one day evebt conducted
                  for all engineering students all over India. Ashwamedha is the
                  perfect way to jazz up the technical skills of a student in a
                  creative way.
                </p>
              )} */}
            </div>

            {/* {!this.props.more && (
              <div className="flex justify-start m-5 opacity-100">
                <a
                  className="button-style1"
                  href={process.env.PUBLIC_URL + "/#/"}
                  target="_self"
                >
                  <span className="d">
                    <span></span>
                  </span>
                  <span>More Info</span>
                </a>
              </div>
            )} */}
          </div>
        </div>
      </div>
    );
  }
}
