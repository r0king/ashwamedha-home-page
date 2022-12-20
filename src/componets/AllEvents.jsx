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
  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      const slides = this.slides;
      const props = this.props;
      const work = [5, 6, 10];
      const comp = [0, 1, 2, 3, 4, 7, 8];
      const general = [15, 19, 20];

      if (props.type === "work") {
        this.filterSlides = work;
      } else if (props.type === "comp") {
        this.filterSlides = comp;
      } else if (props.type === "general") {
        this.filterSlides = general;
      } else {
        this.filterSlides = Array.from(Array(eventData.length).keys());
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
      this.filterSlides = Array.from(Array(eventData.length).keys());
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
    return (
      <div>
        <div className="tabs fixed top-5 h-[5vh] z-10 flex w-screen justify-center">
          <a href="/#" className={"tab text-2xl tab-lifted"}>
            Home
          </a>
          <a
            href="/#/events"
            className={
              this.props.type === undefined
                ? "tab text-2xl tab-lifted tab-active"
                : "tab text-2xl tab-lifted"
            }
          >
                All
          </a>
          <a
            href="/#/events/workshops"
            className={
              this.props.type === "work"
                ? "tab text-2xl tab-lifted tab-active"
                : "tab text-2xl tab-lifted"
            }
          >
            Work Shops
          </a>
          <a
            href="/#/events/competitions"
            className={
              this.props.type === "comp"
                ? "tab text-2xl tab-lifted tab-active"
                : "tab text-2xl tab-lifted"
            }
          >
            Competitions
          </a>
          <a
            href="/#/events/general"
            className={
              this.props.type === "general"
                ? "tab text-2xl tab-lifted tab-active"
                : "tab text-2xl tab-lifted"
            }
          >
            General
          </a>
        </div>

        <div className="relative flex items-center justify-center w-full">
          <div className="w-full h-full mx-auto mt-[5vh]">
            <div
              id="slider"
              className="flex mt-10 flex-wrap items-center justify-center mx-5 lg:gap-8 md:gap-6 gap-14"
            >
              {this.state.slides}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
