import React, { Component } from "react";

export class Card extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
        <div className={"card w-96 bg-base-100 shadow-xl image-full "  + this.props.className}
        >
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-lg">Buy Now</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
