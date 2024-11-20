import React from "react";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const MessageButton = () => {
  const phoneNumber = '8808055633'; 
  const message = 'Hello, I would like to inquire about your product.';

  const handleSMSClick = () => {
    const smsLink = `sms:${phoneNumber}?&body=${encodeURIComponent(message)}`;
    window.location.href = smsLink;
  };

  return (
    <div className="flexColCenter mode">
      <div className="flexStart">
        <div className="flexCenter icon">
          <HiChatBubbleBottomCenter size={25} />
        </div>

        <div className="flexColStart detail">
          <span className="primaryText">Message</span>
        </div>
      </div>

      <div className="flexCenter button" onClick={handleSMSClick}>Message Now</div>
    </div>
  );
};

export default MessageButton;
