import React, { Component } from "react";
import videoplayback from "../assests/Golden Stars.mp4"
import { useParams } from "react-router-dom";
import eventData from "../assests/events.json";
function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

export class EventDetails extends Component {
  constructor(props) {
    super(props);
    this.events = eventData
    this.event = this.events[this.props.params.name];
  }
  componentDidMount() { }

  render() {
    return (
      <div>
        <video
           width={window.innerWidth}
            className="right-0 bottom-0 top-0 min-h-[100%] bg-base-300 min-w-[100%] absolute -z-20"
            loop
            autoPlay
            muted
        >
          <source src={videoplayback} type="video/mp4" />
        </video>

      <div className="hero min-h-screen   flex">
        <div className="h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 flex m-4 md:p-3 md:mx-16 md:my-4">
          <div className="hero-content flex flex-col justify-center md:flex-row">
            <img
              src={this.event.src}
              className="max-w-sm rounded-lg shadow-2xl w-full max-h-[80vh] md:w-[50vw]"
              alt={this.event.event}
            />
            <div className="h-full md:w-1/2 text-primary-focus">
              <h1 className="text-5xl font-bold text-neutral-content">{this.event.name}</h1>
              <h1 className="text-1xl font-bold text-primary-focus">{this.event.date} | {this.event.time}</h1>
              <h1 className="text-1xl font-bold text-neutral-content">{this.event.venue} </h1>
              <div className="h-[60vh] overflow-y-auto overflow-x-hidden">
                <p className="py-6" dangerouslySetInnerHTML={{__html:this.event.content}}> 
                  
                </p>
              </div>
              <button className="btn btn-outline mt-4 text-neutral-content ">Register</button>
            </div>
          </div>
        </div>
      </div>

      </div>
    );
  }
}

export default withParams(EventDetails);
