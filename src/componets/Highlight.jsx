import React, { Component, useState } from "react";
import { useTransition, animated } from "@react-spring/web";
import handleViewport from "react-in-viewport";
import Highlight1 from "../assests/high1.jpg";
import Highlight2 from "../assests/high2.jpg";
import Highlight3 from "../assests/high3.jpg";

class HighlightBlock extends Component {
	render() {
		return (
			<div >
				<section  className="p-4 lg:p-8 dark:text-gray-100">
						<h1 id="highlight" className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
							Highlights
						</h1>
						<div className="flex justify-center mx-auto mt-6 mb-10">
							<span className="inline-block w-40 h-1 rounded-full bg-neutral-content" />
							<span className="inline-block w-3 h-1 mx-1 rounded-full bg-neutral-content" />
							<span className="inline-block w-1 h-1 rounded-full bg-neutral-content" />
						</div>
						<div className="container mx-auto space-y-24">
							<div className="flex flex-col lg:flex-row">
								<img src={Highlight3} alt="H3" className="h-80 dark:bg-gray-500 aspect-video" />
								<div className="flex flex-col justify-center flex-1 p-6 ">
									
									<h3 className="text-3xl font-bold">BMC Bicycle Stunt</h3>
									<p className="my-6 dark:text-gray-400">As the main attraction of the event, last time we had a spine thrilling spectacle of BMC Bicycle Stunt powdered by Mad Bikes Official.
But the actual Show Stopper of the event was the magnificent and spectacular BMW Motorrad Stunt Show!!! Both of them giving the audience the thrill and splendid experience of the escapade!!!
</p>
									
								</div>
							</div>
							<div className="flex flex-col lg:flex-row-reverse">
								<img src={Highlight2} alt="H2" className="h-80 dark:bg-gray-500 aspect-video" />
								<div className="flex flex-col justify-center flex-1 p-6 ">
									
									<h3 className="text-3xl font-bold">Tons of Events yet to be explored</h3>
									<p className="my-6 dark:text-gray-400">Also we had some great collection of both technical and non- technical events which gave a platform for students to boost their knowledge and a fun gala time!
</p>
									
								</div>
							</div>
							<div className="flex flex-col lg:flex-row">
								<img src={Highlight1} alt="H1" className="h-80 dark:bg-gray-500 aspect-video" />
								<div className="flex flex-col justify-center flex-1 p-6 ">
									
									<h3 className="text-3xl font-bold">Goodies & Prizes</h3>
									<p className="my-6 dark:text-gray-400">With some great prize pools and goodies, the event was a great success among the students. The 2 day event covered almost every arena of technological events and proved to be a wonderful amalgam of fun and joy.</p>
									
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
    <div ref={props.refHigh} className="min-h-[50vh]" id="highlights">
      <ViewportBlock />
    </div>
  );
};

export default Highlight;
