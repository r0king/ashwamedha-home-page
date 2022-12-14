import React, { Component , useState, useEffect  } from 'react'
import Logo from '../assests/Logo.png'

export default class Navbar extends Component {
    constructor(props) {
        super();
this.state = {
    toggle: true,
  };
  this.navItems = React.createRef();
}


handleNavclick = async (e) => {
  if (this.state.toggle) {
    this.navItems.current.classList.remove("hidden");
    const temp = this.navItems
    this.navItems = <div></div>
    await new Promise((r) => setTimeout(r, 100));
    this.navItems = temp
    this.navItems.current.classList.add("bg-black", "bg-opacity-70")
    this.navItems.current.classList.add(["animate__animated","animate__slideInRight", "animate__delay-faster","bg-black"]);
  } else {
    this.navItems.current.classList.add(["hidden"]);
  }
  this.setState({
    toggle: !this.state.toggle,
  });
};
render() {
  return (
    <div>
      <nav className="bg-transparent px-2 sm:px-4 py-2.5 rounded fixed z-20 w-screen">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="#home" className="flex items-center">
            <img
              src={Logo}
              className="mr-3 h-[9vh] sm:h-[12vh]"
              alt="Logo"
            />
            {/* <span className="self-center text-xl font-semibold text-white whitespace-nowrap">
              Teqard labs
            </span> */}
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-400 rounded-lg md:hidden hover:bg-transparent focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={this.handleNavclick}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            ref={this.navItems}
            className="hidden w-full md:block md:w-auto"
            id="navbar-default"
          >
            <ul className="flex flex-col p-4 mt-4 bg-transparent md:rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
              <li>
                <a
                  href="#home"
                  className="block py-2 pl-3 pr-4 rounded text-end hover:bg-opacity-75 hover:bg-primary md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#anatomy"
                  className="block py-2 pl-3 pr-4 rounded text-end hover:bg-opacity-75 hover:bg-primary md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 "
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#community"
                  className="block py-2 pl-3 pr-4 rounded text-end hover:bg-opacity-75 hover:bg-primary md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 "
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 pl-3 pr-4 rounded text-end hover:bg-opacity-75 hover:bg-primary md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 "
                >
                  Guests
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 pl-3 pr-4 rounded text-end hover:bg-opacity-75 hover:bg-primary md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 "
                >
                  Highlights
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 pl-3 pr-4 rounded text-end hover:bg-opacity-75 hover:bg-primary md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 "
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
  }
}
