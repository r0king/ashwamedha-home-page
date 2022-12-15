import React, { Component } from 'react'
import Logo2 from "../assests/logo_crop.png";

export default class About extends Component {
  render() {
    return (
      <div className='h-full w-full'>
        <div className='justify-center items-start'>
        <img src={Logo2} alt="Logo" className='opacity-5 invert h-[50%] w-[50%]'/>
        </div>
        <div className='container justify-center items-end'>
        
            <img src={Logo2} alt="Logo"  />
       
        </div>
      </div>
    )
  }
}
