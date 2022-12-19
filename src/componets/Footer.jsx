import React, { Component } from "react";
class Footer extends Component {
  state = {};

  render() {
    return (
      <>
        <div ref={this.props.refContact} id="contact" className=" divider lg:divider-vertical"></div>
        <div className="flex justify-center">
          <div className="flex flex-col w-[75vw] md:flex-row m-5   ">
            <iframe
              title="Ashwamedha 22"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.0305853969758!2d76.4282693141676!3d10.178169272735238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0807bfa8906d61%3A0x11ad08dbd85357dc!2sAdi%20Shankara%20Institute%20of%20Engineering%20and%20Technology%20Kaladi!5e0!3m2!1sen!2sin!4v1671036443844!5m2!1sen!2sin"
              className="flex flex-grow  bg-base-300 place-items-center"
              height={300}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className=" divider md:divider-horizontal"></div>

            <div
              className="flex flex-col justify-center w-full md:w-80 bg-base-300 place-items-center"
              width={300}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            >
              <div className="p-10 ">
                <div className="col-md-12 col-sm-12 col-xs-12 ">
                  <label className="text-xl">
                    <b>VENUE</b>
                  </label>
                  <div className="col-md-12 col-sm-12 col-xs-12 ">
                    <label className="text-lg">
                      Adi Shankara Institute of Engineering and Technology,
                      Mattoor, Ernakulam, Kerala, India
                    </label>
                  </div>
                  <label className="text-xl mt-4">
                    <b>CONTACT</b>
                  </label>
                  <div className="col-md-12 col-sm-12 col-xs-12 ">
                    <label className="text-lg">
                      Sohith : 9497017703
                    </label>
                    <br/>
                    <label className="text-lg">
                      Lekshmi : 8129792747
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" divider lg:divider-vertical"></div>
        </div>
        <footer className="p-10 rounded footer footer-center text-base-content">
          <div>
            <div className="grid grid-flow-col gap-4">
              <a href="https://www.tweeter.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="https://www.youtube.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a href="https://www.facebook.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-flow-col gap-4">
            <a href="#About" className="link link-hover">
              About us
            </a>
            <a href="#Contact" className="link link-hover">
              Contact
            </a>
          </div>

          <div>
            <p>Copyright © 2022 - All right reserved by Ashwamedha 22</p>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
