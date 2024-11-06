import React, { useState } from "react";
import "./Appointment.css";
import Swal from "sweetalert2";

const Appointment = () => {
  const [result, setResult] = useState(""); // Initialize the state to handle result messages

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_ACCESS_KEY); // Use the access key from the .env file

    const handleSuccessAnimation = () => {
      Swal.fire({
        title: "Form Submitted!",
        text: "Your message has been sent successfully. We will Contact You Soon!",
        icon: "success",
        confirmButtonText: "Close",
      });
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        handleSuccessAnimation(); // Call the success animation function
        setResult(""); // Clear the result after successful submission
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setResult("Submission failed, please try again later.");
    }
  };

  return (
    <section className="contactForm">
      <form onSubmit={onSubmit}>
        <h2 style={{color:"#458ff6"}}>Appointment Form</h2>
        <div className="input-box">
          <label>Full Name</label>
          <input
            type="text"
            className="field"
            placeholder="Enter Your Name"
            name="name"
            required
          />
        </div>
        <div className="input-box">
          <label>Email</label>
          <input
            type="email"
            className="field"
            placeholder="Enter Your Email"
            name="email"
            required
          />
        </div>
        <div className="input-box">
          <label>Phone Number</label>
          <input
            type="tel" // Change the type to 'tel' for phone numbers
            className="field"
            placeholder="Enter Your Phone Number"
            name="phone" // Add a name attribute to identify this field
            required
          />
        </div>
        <div className="input-box">
          <label>Your Message</label>
          <textarea
            name="message"
            className="field mess"
            placeholder="Enter Your Message"
          ></textarea>
        </div>
        <button type="submit" className="formButton">
          Send Message
        </button>
        {result && <p>{result}</p>} {/* Display result message */}
      </form>
    </section>
  );
};

export default Appointment;
