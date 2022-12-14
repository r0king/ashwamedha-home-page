import React, { Component } from "react";
import videoplayback from "../assests/stars.mp4"
import { useParams } from "react-router-dom";
import eventData from "../assests/events.json";
function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

export class EventDetails extends Component {
  constructor(props) {
    super(props);
    this.event = eventData[this.props.params.name];
  }
  componentDidMount() { }

  render() {
    return (
      <div className="md:h-screen">
        <video
           width={window.innerWidth}
            className="max-h-screen  w-screen object-cover right-0 bottom-0 top-0 min-h-[100%] bg-base-300 min-w-[100%] fixed -z-20"
            loop
            autoPlay
            muted
        >
          <source src={videoplayback} type="video/mp4" />
        </video>

      <div className="hero md:h-screen py-[2vh] flex">
        <div className="h-full w-full justify-center flex m-4 md:p-3 md:mx-16 md:my-4">
          <div className="hero-content flex flex-col justify-center md:flex-row border-gray-100 border rounded-md backdrop-blur-3xl bg-gray-300  bg-clip-padding backdrop-filter  bg-opacity-10">
            <img
              src={this.event.src}
              className="rounded-lg shadow-2xl object-cover w-4/5 max-h-[80vh] md:w-[50vw] xl:max-w-[30vw]"
              alt={this.event.event}
            />
            <div className="h-full md:w-1/2 text-primary-focus flex flex-col justify-center">
              <h1 className="text-5xl font-bold text-neutral-content">{this.event.name}</h1>
              <h1 className="text-1xl font-bold text-primary-focus">{this.event.date} | {this.event.time}</h1>
              <h1 className="text-1xl font-bold text-neutral-content">{this.event.venue} </h1>
              <div className="h-[60vh] overflow-y-auto overflow-x-hidden">
                <p className="py-6" dangerouslySetInnerHTML={{__html:this.event.content}}/> 
              </div>
              <div className="flex justify-start">
                <a href={this.event.link}>
              <button className="btn btn-outline mt-4 text-neutral-content ">Register</button></a>
              
              </div>
            </div>
          </div>
        </div>
      </div>

      </div>
    );
  }
}

export default withParams(EventDetails);
