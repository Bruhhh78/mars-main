import React from "react";
import { BsFillChatDotsFill } from "react-icons/bs";

const ChatButton = () => {
  const phoneNumber = '918808055633'; 
  const message = 'Hello, I would like to enquire about your product...';

  const handleWhatsAppClick = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="flexColCenter mode">
      <div className="flexStart">
        <div className="flexCenter icon">
          <BsFillChatDotsFill size={25} />
        </div>

        <div className="flexColStart detail">
          <span className="primaryText">Chat</span>
        </div>
      </div>

      <div className="flexCenter button" onClick={handleWhatsAppClick}>Chat Now</div>
    </div>
  );
};

export default ChatButton;
