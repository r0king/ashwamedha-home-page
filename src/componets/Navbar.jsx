import React, { Component } from "react";
import Logo2 from "../assests/logo_crop.png";

export default class Navbar extends Component {
  constructor(props) {
    super();
    this.state = {
      toggle: true,
      currentScrollHeight: 0,
      opacity: 0,
    };
    this.navItems = React.createRef();
  }
  componentDidMount() {
    window.onscroll = () => {
      const newScrollHeight = Math.ceil(window.scrollY / 50) * 50;
      if (this.state.currentScrollHeight !== newScrollHeight) {
        this.setState({ currentScrollHeight: newScrollHeight });
      }
    };
  }
  handleNavclick = async (e) => {
    if (this.state.toggle) {
      this.navItems.current.classList.remove("hidden");
      const temp = this.navItems;
      this.navItems = <div></div>;
      await new Promise((r) => setTimeout(r, 100));
      this.navItems = temp;
      this.navItems.current.classList.add("bg-black", "bg-opacity-70");
      this.navItems.current.classList.add([
        "animate__animated",
        "animate__slideInRight",
        "animate__delay-faster",
        "bg-black",
      ]);
    } else {
      this.navItems.current.classList.add(["hidden"]);
    }
    this.setState({
      toggle: !this.state.toggle,
    });
  };
  render() {
    const opacity = Math.min(100 / this.state.currentScrollHeight, 1);
    
    return (
      <div>
        <nav
          className="fixed z-20 flex-shrink w-screen mb-3 bg-transparent border-b-2 rounded border-neutral-content"
          style={{ opacity: opacity }}
        >
          <div className="flex flex-wrap items-center justify-between mx-auto mr-8 navi">
            <a
              href={process.env.PUBLIC_URL + "/#"}
              className="flex items-center"
            >
              <img
                src={Logo2}
                className="invert ml-2 px-2 py-2 h-[5vh] sm:h-[10vh]"
                alt="Logo"
              />
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
              <ul className="flex flex-col px-4 mt-4 bg-transparent md:rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
                {!this.props.events && (
                  <li>
                    <a
                      href={process.env.PUBLIC_URL + "/#"}
                      className="block py-2 pl-3 pr-4 text-white rounded text-end
                    hover:bg-opacity-75 md:border-0 hover:text-neutral-content
                    md:p-0 "
                      aria-current="page"
                    >
                      {" "}
                      Home
                    </a>
                  </li>
                )}
                {!this.props.events && (
                  <li
                    onClick={(e) => {
                      e.preventDefault();
                      this.props.refAbout.current.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    className="block py-2 pl-3 pr-4 text-white rounded cursor-pointer text-end hover:bg-opacity-75 md:border-0 hover:text-neutral-content md:p-0 "
                    href={process.env.PUBLIC_URL + "/#/about"}
                    className="block py-2 pl-3 pr-4 text-white rounded text-end hover:bg-opacity-75 md:border-0 hover:text-neutral-content md:p-0 "
                  >
                    About
                  </li>
                )}
                {!this.props.events && (
                  <li
                    onClick={(e) => {
                      e.preventDefault();
                      this.props.refEvent.current.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    className="block py-2 pl-3 pr-4 text-white rounded text-end hover:bg-opacity-75 md:border-0 hover:text-neutral-content md:p-0 "
                  >
                    Events
                  </li>
                )}
                {!this.props.events && (
                  <li
                    onClick={(e) => {
                      e.preventDefault();
                      this.props.refGuest.current.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    className="block py-2 pl-3 pr-4 text-white rounded text-end hover:bg-opacity-75 md:border-0 hover:text-neutral-content md:p-0 "
                  >
                    Guests
                  </li>
                )}
                {!this.props.events && (
                  <li
                    onClick={(e) => {
                      e.preventDefault();
                      this.props.refHigh.current.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    href={process.env.PUBLIC_URL + "/#highlights"}
                    className="block py-2 pl-3 pr-4 text-white rounded text-end hover:bg-opacity-75 md:border-0 hover:text-neutral-content md:p-0 "
                  >
                    Highlights
                  </li>
                )}
                {!this.props.events && (
                  <li
                    onClick={(e) => {
                      e.preventDefault();
                      this.props.refContact.current.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    className="block pl-3 pr-4 text-white rounded text-end hover:bg-opacity-75 md:border-0 hover:text-neutral-content md:p-0 "
                  >
                    Contact
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
