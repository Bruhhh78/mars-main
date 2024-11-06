import React from 'react'
import { BsFillChatDotsFill } from 'react-icons/bs'

const EmailButton = () => {
  const email = 'm69unknown@gmail.com'; 
  const subject = 'Product Inquiry'; 
  const body = 'Hello, I would like to inquire about your product.';

  const handleEmailClick = () => {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="flexColCenter mode">
    <div className="flexStart">
      <div className="flexCenter icon">
        <BsFillChatDotsFill size={25} />
      </div>

      <div className="flexColStart detail">
        <span className="primaryText">Mail Us</span>
      </div>
    </div>

    <div className="flexCenter button" onClick={handleEmailClick}>Mail Us</div>
  </div>
  )
}

export default EmailButton