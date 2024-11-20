import React from "react";
import { MdCall } from "react-icons/md";

const CallButton = () => {
  const phoneNumber = '8808055633';
  return (
    <div className="flexColCenter mode">
      <div className="flexStart">
        <div className="flexCenter icon">
          <MdCall size={25} />
        </div>

        <div className="flexColStart detail">
          <span className="primaryText">Call</span>
        </div>
      </div>

      <div className="flexCenter button" onClick={() => window.location.href = `tel:${phoneNumber}`}>Call Now</div>
    </div>
  );
};

export default CallButton;
