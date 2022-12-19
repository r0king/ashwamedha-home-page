import React, { Component, useState } from "react";
import { useTransition, animated } from "@react-spring/web";
import handleViewport from "react-in-viewport";
import guestImg from "../assests/Guest-compress.jpg";

class GuestBlock extends Component {
  render() {
    return (
      <div>
        <section>
          <div className="">
            <div className="container px-6 py-10 mx-auto">
              <h1
                id="guest"
                className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white"
              >
                Special Guests
              </h1>
              <div className="flex justify-center mx-auto mt-6">
                <span className="inline-block w-40 h-1 rounded-full bg-neutral-content" />
                <span className="inline-block w-3 h-1 mx-1 rounded-full bg-neutral-content" />
                <span className="inline-block w-1 h-1 rounded-full bg-neutral-content" />
              </div>
              <p className="max-w-2xl mx-auto mt-6 text-lg text-center text-gray-500 dark:text-gray-300">
                All the mavericks, the curious ones, the ones who set the pace,
                take action and make things happen, are headed to Adi Shankara
                Institute of Engineering and Technology. WHY? Because we have
                Mentalist ARJUN on stage 🔥 on behalf of Ashwamedha'22.
              </p>
            </div>
          </div>
          <div className="container flex items-center justify-center px-6 py-16 mx-auto -mt-20  ">
            <div className="mt-[4vh]  h-[60vh] w-[40vh] flex  flex-col items-center p-4 border sm:p-6 rounded-xl dark:border-gray-700 ">
              <img
                className="object-cover h-[54vh] w-[40vh] rounded-xl aspect-square"
                src={guestImg}
                alt=""
              />
              <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                Arjun Satheesh
              </h1>
              <p className="mt-2 capitalize ">Mentalist</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const WrapperBlock = (props: { inViewport: boolean }) => {
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
  }

  return (
    <div ref={forwardedRef}>
      {transition((style, item) =>
        item ? (
          <animated.div className="w-full " style={style}>
            <GuestBlock />
          </animated.div>
        ) : (
          <div className=""></div>
        )
      )}
    </div>
  );
};
const ViewportBlock = handleViewport(
  WrapperBlock /* options: {}, config: {} */
);

const Guest = (props) => {
  return (
    <div className="min-h-[50vh]" ref={props.refGuest} id="guest">
      <ViewportBlock />
    </div>
  );
};
export default Guest;
