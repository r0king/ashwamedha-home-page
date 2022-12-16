import React, { Component } from 'react'
import Logo2 from "../assests/logo_crop.png";
export default class About extends Component {
  render() {
    return (
      <div className='h-full w-full'>
        {/* <div className='justify-center items-start'>
        <img src={Logo2} alt="Logo" className='opacity-5 invert h-[50%] w-[50%]'/>
        </div> */}
        {/* <div className='container justify-center items-end'>
        
            <img src={Logo2} alt="Logo"  />
       
        </div> */}
        <section class="bg-grey-900">
          <div class="container px-6 py-10 mx-auto flex">
            <div class="lg:-mx-6 lg:flex lg:items-center">
              <img class="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

              <div class="lg:w-1/2 lg:px-6 lg:mt-0">
                <p class="text-7xl font-semibold text-orange-500 text-justify">“ABOUT ASHWAMEDHA“</p>

                {/* <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl lg:w-96">
                    Help us improve our productivity
                </h1> */}

                <p class="max-w-lg mt-6 text-gray-500 dark:text-gray-400 text-justify">
                  “ Sunt nisi consequat cupidatat consequat adipisicing consequat anim proident deserunt culpa pariatur adipisicing excepteur. Irure elit ullamco eiusmod reprehenderit do non. Lorem cillum laboris amet sint minim. Amet quis exercitation in elit. Tempor culpa aute aliqua nostrud Lorem aliqua veniam do minim incididunt tempor. Irure enim deserunt labore nulla cillum incididunt reprehenderit exercitation.
                  Laboris fugiat aliquip Lorem in id consectetur culpa nisi laborum id. Id elit non officia id irure do aute consectetur aute dolor commodo dolore non. Do laboris Lorem amet eiusmod enim dolor ut officia nulla Lorem quis ex nisi ex. Amet labore amet pariatur proident tempor nostrud non nostrud ipsum quis culpa dolor fugiat nostrud. Aliquip minim sunt sunt esse esse. Consectetur voluptate do eiusmod nostrud non deserunt amet aliquip cupidatat sit.
                </p>

                {/* <h3 class="mt-6 text-lg font-medium text-blue-500">Mia Brown</h3>
                <p class="text-gray-600 dark:text-gray-300">Marketing Manager at Stech</p> */}

                {/* <div class="flex items-center justify-between mt-12 lg:justify-start">
                    <button title="left arrow" class="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button title="right arrow" class="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
