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
        event: "Event 0",
        date: "Date 0",
        src: "https://rukminim1.flixcart.com/image/416/416/jiw10280/poster/6/7/2/large-gr2-don-t-forget-to-be-awesome-greatitude-wall-posters-12-original-imaf6j9jzfghq2fs.jpeg?q=70",
        time: "Time 0",
        venue: "Venue 1",
        content: "Details about Event 0 on date 0 and time 0 at venue 0",
      },
      {
        id: 1,
        event: "Event 1",
        date: "Date 1",
        src: "https://rukminim1.flixcart.com/image/416/416/jiw10280/poster/6/7/2/large-gr2-don-t-forget-to-be-awesome-greatitude-wall-posters-12-original-imaf6j9jzfghq2fs.jpeg?q=70",
        time: "Time 1",
        venue: "Venue 1",
        content: "Details about Event 1 on date 1 and time 1 at venue 1",
      },
      {
        id: 2,
        event: "Event 2",
        date: "Date 2",
        src: "https://rukminim1.flixcart.com/image/416/416/jiw10280/poster/6/7/2/large-gr2-don-t-forget-to-be-awesome-greatitude-wall-posters-12-original-imaf6j9jzfghq2fs.jpeg?q=70",
        time: "Time 2",
        venue: "Venue 2",
        content: "Details about Event 2 on date 2 and time 2 at venue 2",
      },
      {
        id: 3,
        event: "Event 3",
        date: "Date 3",
        src: "https://rukminim1.flixcart.com/image/416/416/jiw10280/poster/6/7/2/large-gr2-don-t-forget-to-be-awesome-greatitude-wall-posters-12-original-imaf6j9jzfghq2fs.jpeg?q=70",
        time: "Time 3",
        venue: "Venue 3",
        content: "Details about Event 3 on date 3 and time 3 at venue 3",
      },
      {
        id: 4,
        event: "Event 4",
        date: "Date 4",
        src: "https://rukminim1.flixcart.com/image/416/416/jiw10280/poster/6/7/2/large-gr2-don-t-forget-to-be-awesome-greatitude-wall-posters-12-original-imaf6j9jzfghq2fs.jpeg?q=70",
        time: "Time 4",
        venue: "Venue 4",
        content: "Details about Event 4 on date 4 and time 4 at venue 4",
      },
      {
        id: 5,
        event: "Event 5",
        date: "Date 5",
        src: "https://rukminim1.flixcart.com/image/416/416/jiw10280/poster/6/7/2/large-gr2-don-t-forget-to-be-awesome-greatitude-wall-posters-12-original-imaf6j9jzfghq2fs.jpeg?q=70",
        time: "Time 5",
        venue: "Venue 5",
        content: "Details about Event 5 on date 5 and time 5 at venue 5",
      },
      {
        id: 6,
        event: "Event 6",
        date: "Date 6",
        src: "https://rukminim1.flixcart.com/image/416/416/jiw10280/poster/6/7/2/large-gr2-don-t-forget-to-be-awesome-greatitude-wall-posters-12-original-imaf6j9jzfghq2fs.jpeg?q=70",
        time: "Time 6",
        venue: "Venue 6",
        content: "Details about Event 6 on date 6 and time 6 at venue 6",
      },
      {
        id: 7,
        event: "Event 7",
        date: "Date 7",
        src: "https://rukminim1.flixcart.com/image/416/416/jiw10280/poster/6/7/2/large-gr2-don-t-forget-to-be-awesome-greatitude-wall-posters-12-original-imaf6j9jzfghq2fs.jpeg?q=70",
        time: "Time 7",
        venue: "Venue 7",
        content: "Details about Event 7 on date 7 and time 7 at venue 7",
      },
    ];
    this.event = this.events[this.props.params.name];
  }
  componentDidMount() {}

  render() {
    return (
      // <div className='bg-netral'>Install {this.props.params.name}</div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={this.event.src}
            className="max-w-sm rounded-lg shadow-2xl"
            alt={this.event.event}
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withParams(EventDetails);
