import React, { Component } from "react";
class Footer extends Component {
  state = {};
  render() {
    return (
      <>
        <div id="contact" className=" divider lg:divider-vertical"></div>
        <div className="flex justify-center">
          <div className="flex flex-col w-[75vw] md:flex-row m-5   ">
            <iframe
              title="Ashwamedha 22"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.0305853969758!2d76.4282693141676!3d10.178169272735238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0807bfa8906d61%3A0x11ad08dbd85357dc!2sAdi%20Shankara%20Institute%20of%20Engineering%20and%20Technology%20Kaladi!5e0!3m2!1sen!2sin!4v1671036443844!5m2!1sen!2sin"
              className="flex flex-grow bg-base-300 place-items-center"
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
                  <label className="mt-4 text-xl">
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
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
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
