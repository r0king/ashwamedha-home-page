import React, { Component } from "react";

import { useParams } from "react-router-dom";
function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

export class EventDetails extends Component {
  constructor(props) {
    super(props);
    this.events = [
      {
        id: 0,
        name: "Event 0",
        date: "Date 0",
        src: "https://rukminim1.flixcart.com/image/416/416/jiw10280/poster/6/7/2/large-gr2-don-t-forget-to-be-awesome-greatitude-wall-posters-12-original-imaf6j9jzfghq2fs.jpeg?q=70",
        time: "Time 0",
        venue: "Venue 1",
        content: "Details about Event 0 on date 0 and time 0 at venue 0",
      },
      {
        id: 1,
        name: "Event 1",
        date: "Date 1",
        src: "https://rukminim1.flixcart.com/image/416/416/jiw10280/poster/6/7/2/large-gr2-don-t-forget-to-be-awesome-greatitude-wall-posters-12-original-imaf6j9jzfghq2fs.jpeg?q=70",
        time: "Time 1",
        venue: "Venue 1",
        content: "Details about Event 1 on date 1 and time 1 at venue 1",
      },
      {
        id: 2,
        name: "Event 2",
        date: "Date 2",
        src: "https://rukminim1.flixcart.com/image/416/416/jiw10280/poster/6/7/2/large-gr2-don-t-forget-to-be-awesome-greatitude-wall-posters-12-original-imaf6j9jzfghq2fs.jpeg?q=70",
        time: "Time 2",
        venue: "Venue 2",
        content: "Details about Event 2 on date 2 and time 2 at venue 2",
      },
      {
        id: 3,
        name: "Event 3",
        date: "Date 3",
        src: "https://rukminim1.flixcart.com/image/416/416/jiw10280/poster/6/7/2/large-gr2-don-t-forget-to-be-awesome-greatitude-wall-posters-12-original-imaf6j9jzfghq2fs.jpeg?q=70",
        time: "Time 3",
        venue: "Venue 3",
        content: "Details about Event 3 on date 3 and time 3 at venue 3",
      },
      {
        id: 4,
        name: "Event 4",
        date: "Date 4",
        src: "https://rukminim1.flixcart.com/image/416/416/jiw10280/poster/6/7/2/large-gr2-don-t-forget-to-be-awesome-greatitude-wall-posters-12-original-imaf6j9jzfghq2fs.jpeg?q=70",
        time: "Time 4",
        venue: "Venue 4",
        content: "Details about Event 4 on date 4 and time 4 at venue 4",
      },
      {
        id: 5,
        name: "Event 5",
        date: "Date 5",
        src: "https://rukminim1.flixcart.com/image/416/416/jiw10280/poster/6/7/2/large-gr2-don-t-forget-to-be-awesome-greatitude-wall-posters-12-original-imaf6j9jzfghq2fs.jpeg?q=70",
        time: "Time 5",
        venue: "Venue 5",
        content: "Details about Event 5 on date 5 and time 5 at venue 5",
      },
      {
        id: 6,
        name: "Event 6",
        date: "Date 6",
        src: "https://rukminim1.flixcart.com/image/416/416/jiw10280/poster/6/7/2/large-gr2-don-t-forget-to-be-awesome-greatitude-wall-posters-12-original-imaf6j9jzfghq2fs.jpeg?q=70",
        time: "Time 6",
        venue: "Venue 6",
        content: "Details about Event 6 on date 6 and time 6 at venue 6",
      },
      {
        id: 7,
        name: "Event 7",
        date: "Date 7",
        src: "https://rukminim1.flixcart.com/image/416/416/jiw10280/poster/6/7/2/large-gr2-don-t-forget-to-be-awesome-greatitude-wall-posters-12-original-imaf6j9jzfghq2fs.jpeg?q=70",
        time: "Time 7",
        venue: "Venue 7",
        content: "Details about Event 7 on date 7 and time 7 at venue 7Details about Event 7 on date 7 and time 7 at venue 7Details about Event 7 on date 7 and time 7 at venue 7Details about Event 7 on date 7 and time 7 at venue 7Details about Event 7 on date 7 and time 7 at venue 7Details about Event 7 on date 7 and time 7 at venue 7Details about Event 7 on date 7 and time 7 at venue 7Details about Event 7 on date 7 and time 7 at venue 7Details about Event 7 on date 7 and time 7 at venue 7Details about Event 7 on date 7 and time 7 at venue 7Details about Event 7 on date 7 and time 7 at venue 7Details about Event 7 on date 7 and time 7 at venue 7Details about Event 7 on date 7 and time 7 at venue 7Details about Event 7 on date 7 and time 7 at venue 7Details about Event 7 on date 7 and time 7 at venue 7Details about Event 7 on date 7 and time 7 at venue 7Details about Event 7 on date 7 and time 7 at venue 7Details about Event 7 on date 7 and time 7 at venue 7Details about Event 7 on date 7 and time 7 at venue 7Details about Event 7 on date 7 and time 7 at venue 7Details about Event 7 on date 7 and time 7 at venue 7Details about Event 7 on date 7 and time 7 at venue 7Details about Event 7 on date 7 and time 7 at venue 7Details about Event 7 on date 7 and time 7 at venue 7Details about Event 7 on date 7 and time 7 at venue 7Details about Event 7 on date 7 and time 7 at venue 7Details about Event 7 on date 7 and time 7 at venue 7Details about Event 7 on date 7 and time 7 at venue 7Details about Event 7 on date 7 and time 7 at venue 7Details about Event 7 on date 7 and time 7 at venue 7Details about Event 7 on date 7 and time 7 at venue 7Details about Event 7 on date 7 and time 7 at venue 7Details about Event 7 on date 7 and time 7 at venue 7Details about Event 7 on date 7 and time 7 at venue 7Details about Event 7 on date 7 and time 7 at venue 7Details about Event 7 on date 7 and time 7 at venue 7Details about Event 7 on date 7 and time 7 at venue 7Details about Event 7 on date 7 and time 7 at venue 7Details about Event 7 on date 7 and time 7 at venue 7Details about Event 7 on date 7 and time 7 at venue 7Details about Event 7 on date 7 and time 7 at venue 7Details about Event 7 on date 7 and time 7 at venue 7Details about Event 7 on date 7 and time 7 at venue 7Details about Event 7 on date 7 and time 7 at venue 7",
      },
    ];
    this.event = this.events[this.props.params.name];
  }
  componentDidMount() { }

  render() {
    return (
      <div className="hero min-h-screen bg-base-200 flex">
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
                <p className="py-6">
                  {this.event.content}
                </p>
              </div>
              <button className="btn btn-outline mt-4 text-neutral-content ">Register</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withParams(EventDetails);
