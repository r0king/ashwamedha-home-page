import React, { Component } from "react";
import Navbar from "./Navbar";
import eventData from "../assests/events.json";

export default class AllEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slides: [],
            loaded:false
        };
        this.slides = eventData;
    
    }
    componentDidMount() {
        const slides = this.slides;
        let slidesHtml = [];
        slides.forEach((slide) => {
            slidesHtml.push(
                <div index={this.state.slides.length} key={slide.id}>
                    <a href={process.env.PUBLIC_URL + "/#/" + slide.id} target="_self"><div className="main flex flex-shrink relative sm:w-auto max-w-[75vw] sm:max-w-[20vw] md:max-w-[25vw] max-h-[450px] transition duration-500 hover:scale-110 ">
                        <img
                        
                            src={slide.src}
                            alt="black chair and white table"
                            className="object-cover object-center w-full "
                        />
                        
                        <div className="absolute flex flex-col justify-between flex-shrink-0 w-full h-full p-6 pb-2 bg-black bg-opacity-40 ">
                            <h2 className="text-base font-bold leading-4 lg:text-xl lg:leading-5 text-primary">
                                {slide.venue}
                            </h2>
                            <h4 className="text-base leading-4 lg:text-lg lg:leading-5 ">{""}</h4>
                            
                        </div>
                    </div></a>
                </div>
            );
        });
        this.setState({ slides: slidesHtml });
        this.state.loaded=true
    }
    render() {
        return (
            <div>
                <Navbar />
                {this.state.loaded && <div className="relative flex items-center justify-center w-full">

                      <div className="w-full h-full mx-auto mt-[15vh]">
                        <div
                            id="slider"
                            className="flex flex-wrap items-center justify-center mx-5 lg:gap-8 md:gap-6 gap-14"
                        >
                            { this.state.slides}
                        </div>
                    </div>
                </div>}
            </div>
        );
    }
}