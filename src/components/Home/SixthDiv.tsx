"use client";
import React, { useEffect, useState } from "react";
import "@/app/css/SixthDiv.css";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

function SixthDiv() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    // Generate the email body using the gathered values
    const emailBody = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    // Send the user to the email client with the generated email body
    const mailtoLink = `mailto:your-email@example.com?subject=Contact Inquiry&body=${encodeURIComponent(
      emailBody
    )}`;
    window.location.href = mailtoLink;
  };
  const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -25%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

  return (
    <div className="ContactUsDiv">
       
      <div className="ContactUs">
     
        <div className="TextForm">
          <div>
          <Reveal
                keyframes={customAnimation}
                duration={1500}
                delay={1000}
                triggerOnce
              >
            <h2 className="FormH2">Looking for a excellent Tiktok Agency?</h2>
          <p className="FormP">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ac eu mattis
            placerat ligula et semper imperdiet, mauris sem dis erat auctor
            inceptos ad in nisl bibendum pretium feugiat natoque consequat.
          </p>
          </Reveal>
          </div>
          <div className="ContactsInfo">
          <Reveal
                keyframes={customAnimation}
                duration={1500}
                delay={1000}
                triggerOnce
              >
            <p className="ContactsInfoP">Phone: +1234567890123</p>
            <p className="ContactsInfoP">
              Email:Email: email@yourdomain.com
            </p>
            </Reveal>
          </div>
          
        </div>
        <Reveal
                keyframes={customAnimation}
                duration={1500}
                delay={1000}
                triggerOnce
                className="Form"
              >
                <div className="Form TextInput">
        
          <input
            type="text"
            placeholder="Enter Your Name"
            className="TextInput"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Email"
            className="TextInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className="TextArea"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button className="SubmitButton" onClick={handleSend}>Send</button>
          
        </div>
              </Reveal>
        
        
      </div>
      
    </div>
  );
}

export default SixthDiv;
