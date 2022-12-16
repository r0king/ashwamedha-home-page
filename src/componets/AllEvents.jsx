import React, { Component } from 'react'
import Navbar from './Navbar'
import eventData from '../assests/events.json'

export default class AllEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
           // slides: [],
        };
        this.slides = eventData;
        console.log(this.slides);
    }
    /*componentDidMount() {
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
                        <div className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-30 ">
                            <h2 className="text-base font-bold leading-4 lg:text-xl lg:leading-5 text-primary">
                                {slide.venue}
                            </h2>
                            <h4 className="text-base leading-4 lg:text-lg lg:leading-5 ">
                                <span className="font-semibold">{slide.date} </span>
                                <span className="text-white">{slide.time}</span>
                            </h4>
                            <div className="flex items-end h-full pb-6">
                                <h3 className="text-xl font-semibold leading-5 lg:text-2xl lg:leading-6 ">
                                    {slide.event}{" "}
                                </h3>
                            </div>
                        </div>

                    </div>
                </div>
            );
        });
        this.setState({ slides: slidesHtml });
    }*/
    render() {
        return (
            <div>
                <Navbar />
                <section className="py-6 text-gray-50">
	<div className="container grid grid-cols-2 gap-4 p-4 mx-auto mt-16 md:grid-cols-4 ">
    <img src="https://wallpaperaccess.com/full/2592104.jpg" alt="" className="w-full h-full col-span-2 row-span-2 bg-gray-500 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 aspect-square" />
		<img alt="" className="w-full h-full bg-gray-500 rounded shadow-sm min-h-48 aspect-square" src="https://images.hdqwalls.com/download/ghost-rider-artwork-hd-kv-1920x1080.jpg" />
		<img alt="" className="w-full h-full bg-gray-500 rounded shadow-sm min-h-48 aspect-square" src="https://images.hdqwalls.com/download/ghost-rider-artwork-hd-kv-1920x1080.jpg" />
        <img alt="" className="w-full h-full bg-gray-500 rounded shadow-sm min-h-48 aspect-square" src="https://images.hdqwalls.com/download/ghost-rider-artwork-hd-kv-1920x1080.jpg" />		
        <img alt="" className="w-full h-full bg-gray-500 rounded shadow-sm min-h-48 aspect-square" src="https://images.hdqwalls.com/download/ghost-rider-artwork-hd-kv-1920x1080.jpg" />        
        <img alt="" className="w-full h-full bg-gray-500 rounded shadow-sm min-h-48 aspect-square" src="https://images.hdqwalls.com/download/ghost-rider-artwork-hd-kv-1920x1080.jpg" />		
        <img alt="" className="w-full h-full bg-gray-500 rounded shadow-sm min-h-48 aspect-square" src="https://images.hdqwalls.com/download/ghost-rider-artwork-hd-kv-1920x1080.jpg" />       
        <img alt="" className="w-full h-full bg-gray-500 rounded shadow-sm min-h-48 aspect-square" src="https://images.hdqwalls.com/download/ghost-rider-artwork-hd-kv-1920x1080.jpg" />		
        <img alt="" className="w-full h-full bg-gray-500 rounded shadow-sm min-h-48 aspect-square" src="https://images.hdqwalls.com/download/ghost-rider-artwork-hd-kv-1920x1080.jpg" />		
        <img src="https://wallpaperaccess.com/full/2592104.jpg" alt="" className="w-full h-full col-span-2 row-span-2 bg-gray-500 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 aspect-square" />
	</div>
    <div className="container grid grid-cols-2 gap-4 p-4 md:grid-cols-4">
		<img src="https://wallpaperaccess.com/full/2592104.jpg" alt="" className="w-full h-full col-span-2 row-span-2 bg-gray-500 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 aspect-square"/>
		<img alt="" className="w-full h-full bg-gray-500 rounded shadow-sm min-h-48 aspect-square" src="https://images.hdqwalls.com/download/ghost-rider-artwork-hd-kv-1920x1080.jpg" />
		<img alt="" className="w-full h-full bg-gray-500 rounded shadow-sm min-h-48 aspect-square" src="https://images.hdqwalls.com/download/ghost-rider-artwork-hd-kv-1920x1080.jpg" />
        <img alt="" className="w-full h-full bg-gray-500 rounded shadow-sm min-h-48 aspect-square" src="https://images.hdqwalls.com/download/ghost-rider-artwork-hd-kv-1920x1080.jpg" />		
        <img alt="" className="w-full h-full bg-gray-500 rounded shadow-sm min-h-48 aspect-square" src="https://images.hdqwalls.com/download/ghost-rider-artwork-hd-kv-1920x1080.jpg" />        
        <img alt="" className="w-full h-full bg-gray-500 rounded shadow-sm min-h-48 aspect-square" src="https://images.hdqwalls.com/download/ghost-rider-artwork-hd-kv-1920x1080.jpg" />		
        <img alt="" className="w-full h-full bg-gray-500 rounded shadow-sm min-h-48 aspect-square" src="https://images.hdqwalls.com/download/ghost-rider-artwork-hd-kv-1920x1080.jpg" />       
        <img alt="" className="w-full h-full bg-gray-500 rounded shadow-sm min-h-48 aspect-square" src="https://images.hdqwalls.com/download/ghost-rider-artwork-hd-kv-1920x1080.jpg" />		
        <img alt="" className="w-full h-full bg-gray-500 rounded shadow-sm min-h-48 aspect-square" src="https://images.hdqwalls.com/download/ghost-rider-artwork-hd-kv-1920x1080.jpg" />		
        <img src="https://wallpaperaccess.com/full/2592104.jpg" alt="" className="w-full h-full col-span-2 row-span-2 bg-gray-500 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 aspect-square" />
        
	</div>
</section>
<div className="container items-center px-4 py-8 mx-auto lg:px-32 ">
  <div className="grid grid-flow-col grid-cols-4 grid-rows-4 gap-2">
  <div className="w-full ">
      <img src="https://images.unsplash.com/photo-1489981424607-45c58daf0581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Photo by Claudio Schwarz on Unsplash" className="inset-0 object-cover object-center w-full h-full rounded opacity-75 hover:opacity-100 " />
    </div>
    <div className="w-full">
      <img src="https://images.unsplash.com/photo-1489981424607-45c58daf0581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Photo by Claudio Schwarz on Unsplash" className="inset-0 object-cover object-center w-full h-full rounded opacity-75 hover:opacity-100 " />
    </div>
    <div className="w-full col-span-2 row-span-2">
      <img src="https://images.unsplash.com/photo-1586921829167-409624a3734a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Photo by Claudio Schwarz on Unsplash" className="inset-0 object-cover object-center w-full h-full rounded opacity-75 hover:opacity-100 " />
    </div>
    <div className="w-full ">
      <img src="https://images.unsplash.com/photo-1489981424607-45c58daf0581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Photo by Claudio Schwarz on Unsplash" className="inset-0 object-cover object-center w-full h-full rounded opacity-75 hover:opacity-100 " />
    </div>
    <div className="w-full">
      <img src="https://images.unsplash.com/photo-1489981424607-45c58daf0581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Photo by Claudio Schwarz on Unsplash" className="inset-0 object-cover object-center w-full h-full rounded opacity-75 hover:opacity-100 " />
    </div>
    <div className="w-full col-span-2 row-span-2">
      <img src="https://images.unsplash.com/photo-1586921829167-409624a3734a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Photo by Claudio Schwarz on Unsplash" className="inset-0 object-cover object-center w-full h-full rounded opacity-75 hover:opacity-100 " />
    </div>
    <div className="w-full col-span-2">
      <img src="https://images.unsplash.com/photo-1534531173927-aeb928d54385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Photo by Claudio Schwarz on Unsplash" className="inset-0 object-cover object-center w-full h-full rounded opacity-75 hover:opacity-100 " />
    </div>
    <div className="w-full">
      <img src="https://images.unsplash.com/photo-1489981424607-45c58daf0581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Photo by Claudio Schwarz on Unsplash" className="inset-0 object-cover object-center w-full h-full rounded opacity-75 hover:opacity-100 " />
    </div>
    <div className="w-full">
      <img src="https://images.unsplash.com/photo-1489981424607-45c58daf0581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Photo by Claudio Schwarz on Unsplash" className="inset-0 object-cover object-center w-full h-full rounded opacity-75 hover:opacity-100 " />
    </div>
  </div>
</div>
            </div>
        )
    }
}
