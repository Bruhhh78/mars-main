import React from "react";
import "./Contact.css";
import CallButton from "../Buttons/CallButton";
import ChatButton from "../Buttons/ChatButton";
import EmailButton from "../Buttons/EmailButton";
import MessageButton from "../Buttons/MessageButton";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* Left Side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to Contact Us</span>
          <span className="secondaryText">
            We Always ready to help by providing the best service for you. We
            believe a good place to live can make your life better
          </span>

          <div className="flexColStart contactModes">
            
            {/* First Row */}
            <div className="flexStart row">
              {/* First Mode */}
              <CallButton/>

              {/* Second Mode */}
              <ChatButton/>
            </div>

            {/* Second Row */}
            <div className="flexStart row">
              {/* Third Mode */}
              <EmailButton/>

              {/* Fourth Mode */}
              <MessageButton/>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="c-right">
          <div className="image-container">
            <img src="/download-image.png" alt="contactlogo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;