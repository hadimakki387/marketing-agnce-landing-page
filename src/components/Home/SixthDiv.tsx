"use client";
import React, { useEffect, useState } from "react";
import "@/app/css/SixthDiv.css";

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

  return (
    <div className="ContactUsDiv">
      <div className="ContactUs">
        <div className="TextForm">
          <div>
            <h2 className="FormH2">Looking for a excellent Tiktok Agency?</h2>
          <p className="FormP">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ac eu mattis
            placerat ligula et semper imperdiet, mauris sem dis erat auctor
            inceptos ad in nisl bibendum pretium feugiat natoque consequat.
          </p>
          </div>
          <div className="ContactsInfo">
            <p className="ContactsInfoP">Phone: +1234567890123</p>
            <p className="ContactsInfoP">
              Email:Email: email@yourdomain.com
            </p>
          </div>
          
        </div>
        <div className="Form">
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
      </div>
    </div>
  );
}

export default SixthDiv;
