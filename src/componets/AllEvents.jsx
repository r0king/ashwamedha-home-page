import React, { Component } from 'react'
import Navbar from './Navbar'
import eventData from '../assests/events.json'

export default class AllEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
           slides: [],
        };
        this.slides = eventData;
        console.log(this.slides);
    }
    componentDidMount() {
        const slides = this.slides;
        let slidesHtml = [];
        slides.forEach((slide) => {
            slidesHtml.push(
                <div index={this.state.slides.length}>
                    <div className="main flex flex-shrink relative sm:w-auto lg:max-w-[15vw] max-w-[75vw] sm:max-w-[20vw] max-h-[450px] transition duration-500 hover:scale-110 ">
                        <img
                            src={slide.src}
                            alt="black chair and white table"
                            className="object-cover object-center w-full  "
                        />
                        <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-20 flex-shrink-0 ">
                            <h2 className="text-base font-bold leading-4 lg:text-xl lg:leading-5 text-primary">
                                {slide.venue}
                            </h2>
                            <h4 className="text-base leading-4 lg:text-lg lg:leading-5 ">
                                <span className="font-semibold">{slide.date} </span>
                                <span className="text-white">{slide.time}</span>
                            </h4>
                            <div className='work hover:flex justify-center opacity-100'>
                            <button className="align lg:mt-20 lg:ml-9 justify-center rounded-full absolute  bg-black hover:bg-orange-400 border-2 border-orange-400 w-[8vw] h-[6vh]  text-white lg:text-lg  font-semibold">
                        View More
                      </button>
                            </div>
                            {/* <div className="flex items-end h-full pb-6">
                                
                                <h3 className="text-xl font-semibold leading-5 lg:text-2xl lg:leading-6  align-bottom">
                                    {slide.name}{" "}
                                </h3>
                            </div> */}
                            
                    
                    
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
