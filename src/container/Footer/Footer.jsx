import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";

const Footer = () => {
  const form = useRef();

  const nameRef = useRef();

  const handleChangeFocus = () => {
    nameRef.current.focus();
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_p4086ab",
        "template_vn7fdc6",
        form.current,
        "JoS3gi2Fimmr5x8Kw"
      )
      .then(
        (result) => {
          setLoading(false);
          setIsFormSubmitted(true);

          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <p onClick={handleChangeFocus} className="p-text">
            caodangquocduong2000ht@gmail.com
          </p>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <p className="p-text">0972000963</p>
        </div>
      </div>
      {!isFormSubmitted ? (
        <form
          onSubmit={sendEmail}
          ref={form}
          className="app__footer-form app__flex"
        >
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="user_name"
              required
              ref={nameRef}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="user_email"
              required
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              name="message"
              required
            />
          </div>
          <button type="submit" className="p-text">
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);
