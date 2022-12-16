import React, { Component } from 'react'
import Navbar from './Navbar'


export default class AllEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slides: [],
        };
        this.slides = [
            { event: "Event 1", date: "Date 1", time: "Time 1", venue: "Venue 1", content: "Details about Event 1 on date 1 and time 1 at venue 1" },
            { event: "Event 2", date: "Date 2", time: "Time 2", venue: "Venue 2", content: "Details about Event 2 on date 2 and time 2 at venue 2" },
            { event: "Event 3", date: "Date 3", time: "Time 3", venue: "Venue 3", content: "Details about Event 3 on date 3 and time 3 at venue 3" },
            { event: "Event 4", date: "Date 4", time: "Time 4", venue: "Venue 4", content: "Details about Event 4 on date 4 and time 4 at venue 4" },
            { event: "Event 5", date: "Date 5", time: "Time 5", venue: "Venue 5", content: "Details about Event 5 on date 5 and time 5 at venue 5" },
            { event: "Event 6", date: "Date 6", time: "Time 6", venue: "Venue 6", content: "Details about Event 6 on date 6 and time 6 at venue 6" },
            { event: "Event 7", date: "Date 7", time: "Time 7", venue: "Venue 7", content: "Details about Event 7 on date 7 and time 7 at venue 7" },
        ];
    }
    componentDidMount() {
        const slides = this.slides;
        let slidesHtml = [];
        slides.forEach((slide) => {
            slidesHtml.push(
                <div index={this.state.slides.length}>
                    <div className="flex flex-shrink-0 relative sm:w-auto lg:max-w-[20vw] max-w-[75vw] min-h-[450px] transition duration-500 hover:scale-110 hover:opacity-30">
                        <img
                            src="https://m.media-amazon.com/images/M/MV5BNmNhM2NjMTgtNmIyZC00ZmVjLTk4YWItZmZjNGY2NThiNDhkXkEyXkFqcGdeQXVyODU4MDU1NjU@._V1_FMjpg_UX1000_.jpg"
                            alt="black chair and white table"
                            className="object-cover object-center w-full "
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6 ">
                            <h2 className="lg:text-xl font-bold leading-4 text-base lg:leading-5 text-primary">
                                {slide.venue}
                            </h2>
                            <h4 className="lg:text-lg leading-4 text-base lg:leading-5 ">
                                <span className="font-semibold">{slide.date} </span>
                                <span className="text-white">{slide.time}</span>
                            </h4>
                            <div className="flex h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 ">
                                    {slide.event}{" "}
                                </h3>
                            </div>
                        </div>

                    </div>
                </div>
            );
        });
        this.setState({ slides: slidesHtml });
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="w-full relative flex items-center justify-center">
                    <div className="w-full h-full mx-auto mt-[15vh]">

                        <div
                            id="slider"
                            className="flex lg:gap-8 md:gap-6 gap-14 items-center justify-center flex-wrap"
                        >
                            {this.state.slides}
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
