import React, { Component } from 'react'
import Video from '../assests/bgvideo.mp4'

export default class Hero extends Component {
    constructor(props) {
        super();
      }
  render() {
    return (
      <div className='flex'>
        <video src={Video} className="w-full h-full object-cover -rotate-90 m-auto align-top" autoPlay loop muted/>
      </div>
    )
  }
}

