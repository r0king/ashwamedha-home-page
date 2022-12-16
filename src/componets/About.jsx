import React, { Component } from 'react'
import Logo2 from "../assests/logo_crop.png";

export default class About extends Component {
  render() {
    return (
      <div className='h-full w-full'>
       
       <section className="bg-grey-900">
        <div className="container px-6 py-10 mx-auto flex ">
          <div className="lg:-mx-6 lg:flex lg:items-center justify-center flex-auto sm:flex sm:items-center ">
            <img className="object-cover object-center lg:w-1/3 sm:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-full sm:h-full" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
            <div className="lg:w-1/2 lg:px-6 lg:mt-0 sm:w-1/2 sm:ml-6">
              <p className="text-3xl font-semibold text-justify text-orange-400"><span className="inline-block w-16 h-0.5 bg-orange-400 rounded-full mb-2 mr-12" />ABOUT US</p>
              <p className="text-5xl font-semibold text-justify text-white"><span classname="text-5xl font-bold text-gray-500 mr-6">01</span>Who We Are</p>
              <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 text-justify">
                “ Sunt nisi consequat cupidatat consequat adipisicing consequat anim proident deserunt culpa pariatur adipisicing excepteur. Irure elit ullamco eiusmod reprehenderit do non. Lorem cillum laboris amet sint minim. Amet quis exercitation in elit. Tempor culpa aute aliqua nostrud Lorem aliqua veniam do minim incididunt tempor. Irure enim deserunt labore nulla cillum incididunt reprehenderit exercitation.
                Laboris fugiat aliquip Lorem in id consectetur culpa nisi laborum id. Id elit non officia id irure do aute consectetur aute dolor commodo dolore non. Do laboris Lorem amet eiusmod enim dolor ut officia nulla Lorem quis ex nisi ex. Amet labore amet pariatur proident tempor nostrud non nostrud ipsum quis culpa dolor fugiat nostrud. Aliquip minim sunt sunt esse esse. Consectetur voluptate do eiusmod nostrud non deserunt amet aliquip cupidatat sit.
              </p>
              <a href='#'><p className='text-2xl font-semibold'><span className="inline-block w-0.5 h-5 bg-orange-400 rounded-full mt-4 mr-4" />READ MORE<span className="inline-block w-0.5 h-5 bg-orange-400 rounded-full mt-4 ml-4"/></p></a>
            </div>
          </div>
        </div>
      </section>
      </div>
    )
  }
}
