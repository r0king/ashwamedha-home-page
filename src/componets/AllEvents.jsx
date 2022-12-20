import React, { Component } from "react";
import Navbar from "./Navbar";
import eventData from "../assests/events.json";

export default class AllEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [],
    };
    this.slides = eventData;

  }
  componentDidMount() {
    const slides = this.slides;
    const props = this.props;
    const work = [0,5,6,10,12,14,15,16,18,19,20,21,22,25,28,31,34];
    const comp = [0, 1, 2, 3, 4, 7, 8];
    const general = [15, 19, 20];

    if (props.type === "work") {
      this.filterSlides = work;
    } else if (props.type === "comp") {
      this.filterSlides = comp;
    } else if (props.type === "general") {
      this.filterSlides = general;
    } else {
      this.filterSlides = Array.from(Array(eventData.length).keys())
    }
    let slidesHtml = [];
    this.filterSlides.forEach((id) => {
      slidesHtml.push(
        <div index={id} key={id}>
          <a href={process.env.PUBLIC_URL + "/#/events/" + id} target="_self">
            <div className="main flex flex-shrink relative sm:w-auto max-w-[75vw] sm:max-w-[20vw] md:max-w-[25vw] max-h-[450px] transition duration-500 hover:scale-110 ">
              <img
                src={slides[id].src}
                alt="black chair and white table"
                className="object-cover object-center w-full "
              />
            </div>
          </a>
        </div>
      );
    });
    this.setState({ slides: slidesHtml });

  }
  render() {
    console.log(this.props)
    return (
      <div>
        {/* <div className="tabs">
          <a href="/#/events/workshops" className={(this.props.type === "work") ? "tab tab-bordered tab-active" : "tab tab-bordered"}>Tab 1</a>
          <a href="/#/events/competitions" className={(this.props.type === "comp") ? "tab tab-bordered tab-active" : "tab tab-bordered"}>Tab 2</a>
          <a href="/#/events/general" className={(this.props.type === "general") ? "tab tab-bordered tab-active" : "tab tab-bordered"}>Tab 3</a>
        </div> */}

        <div className="relative flex items-center justify-center w-full">
          <div className="w-full h-full mx-auto mt-[5vh]">
            <div className="pl-10 mb-8">
              <a href={process.env.PUBLIC_URL + "/#"}>
                <button type="button" className="px-4 py-2 bg-transparent border rounded shadow text-neutral-content border-neutral-content hover:bg-neutral-content hover:text-black hover:shadow-lg hover:border-transparent">Back to Home</button>
              </a>
            </div>

            <div
              id="slider"
              className="flex flex-wrap items-center justify-center mx-5 lg:gap-8 md:gap-6 gap-14"
            >
              {this.state.slides}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
