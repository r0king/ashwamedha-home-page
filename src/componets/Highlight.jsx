import React, { Component, useState } from "react";
import { useTransition, animated } from "@react-spring/web";
import handleViewport from "react-in-viewport";
class HighlightBlock extends Component {
	render() {
		return (
			<div>
				<section id="highlight" className="p-4 lg:p-8 dark:text-gray-100">
						<h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
							Highlights
						</h1>
						<div className="flex justify-center mx-auto mt-6 mb-10">
							<span className="inline-block w-40 h-1 rounded-full bg-neutral-content" />
							<span className="inline-block w-3 h-1 mx-1 rounded-full bg-neutral-content" />
							<span className="inline-block w-1 h-1 rounded-full bg-neutral-content" />
						</div>
						<div className="container mx-auto space-y-24">
							<div className="flex flex-col lg:flex-row">
								<img src="https://source.unsplash.com/640x480/?1" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
								<div className="flex flex-col justify-center flex-1 p-6 ">
									<span className="text-xs uppercase text-neutral-content">Join, it's free</span>
									<h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
									<p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
									<button type="button" className="self-start text-neutral-content">Action</button>
								</div>
							</div>
							<div className="flex flex-col lg:flex-row-reverse">
								<img src="https://source.unsplash.com/640x480/?2" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
								<div className="flex flex-col justify-center flex-1 p-6 ">
									<span className="text-xs uppercase text-neutral-content">Join, it's free</span>
									<h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
									<p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
									<button type="button" className="self-start text-neutral-content">Action</button>
								</div>
							</div>
							<div className="flex flex-col lg:flex-row">
								<img src="https://source.unsplash.com/640x480/?3" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
								<div className="flex flex-col justify-center flex-1 p-6 ">
									<span className="text-xs uppercase text-neutral-content">Join, it's free</span>
									<h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
									<p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
									<button type="button" className="self-start text-neutral-content">Action</button>
								</div>
							</div>
						</div>
				</section>
			</div>
		);
	}
}
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
  } 

  return (
    <div ref={forwardedRef}>
      {transition((style, item) =>
        item ? (
          <animated.div
            className="w-full "
            style={style}
          >
            <HighlightBlock />
          </animated.div>
        ) : (
          <div className=""></div>
        )
      )}
    </div>
  );
};
const ViewportBlock = handleViewport(AboutBlock /* options: {}, config: {} */);

const Highlight = (props) => {
  return (
    <div className="min-h-[50vh]">
      <ViewportBlock />
    </div>
  );
};

export default Highlight;
