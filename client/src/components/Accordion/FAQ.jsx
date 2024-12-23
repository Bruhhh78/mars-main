import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className=" p-4 bg-blue-100 rounded-lg">
      <Accordion
        title="When will my purchased products be installed?"
        answer="The installation of the product(s) is completed within two working days after the delivery. Our teams try their best to always stick to the installation timelines and delays, if any, are only due to unforeseen and unavoidable circumstances."
      />
      <Accordion
        title="Will I be notified regarding technician visit for installation?"
        answer="You will be notified via SMS once the Mars HealthCare technician visit is confirmed."
      />
      <Accordion
        title="What if I face any issue with furniture after installation?"
        answer="Please get in touch with our Service Team for any service request - marswebhealthcare@gmail.com or 8808055633 or WhatsApp on 8808055633."
      />
      {/* <Accordion title="Testing" answer="testing Answer" /> */}
    </div>
  );
};

export default FAQ;
