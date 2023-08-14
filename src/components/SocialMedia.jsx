import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    {/* <div>
      <BsTwitter />
    </div> */}
    <a
      href="https://www.facebook.com/duong.quoc.50364592"
      target="_blank"
      rel="noreferrer"
    >
      <FaFacebookF />
    </a>
    <a
      href="https://www.facebook.com/duong.quoc.50364592"
      target="_blank"
      rel="noreferrer"
    >
      <BsInstagram />
    </a>
  </div>
);

export default SocialMedia;
