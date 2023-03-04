import "../components/ContactStyles.css";
import React, { useRef } from "react";
import ContactImg from "../images/ContactUs-Cover.jpg";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9wm4z2p",
        "template_fo0xrgp",
        form.current,
        "Au-e9kLE7Lc5uUir9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("Thank you for your Message! We will get back to you");
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        <img className="contact-img" src={ContactImg} alt="info" />
      </div>
      <div className="contact-right">
        <h2>
          Let's Work <span>Together</span>
        </h2>
        <p>
          If you have something in mind that you want to be built into an idea,
          you can leave us a message and we will ensure replying to you within
          24 hours! <span> Make it Easy to Reach your Brand</span>
        </p>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <input
            className="name-inp"
            type="text"
            placeholder="Name"
            name="user_name"
            required
          />
          <input
            className="email-inp"
            type="email"
            placeholder="Email"
            name="user_email"
            required
          />
          <input
            className="phone-inp"
            type="tel"
            placeholder="Phone Number"
            name="phone_no"
            required
          />
          <textarea
            cols="500"
            rows="2"
            className="message-inp"
            type="text"
            placeholder="Message"
            name="message"
            required
          />
          <input className="but-inp" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
