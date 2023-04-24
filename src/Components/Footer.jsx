import React from "react";
import whatsapp from "../assets/SVGimg/wha.svg";
import linkedinLogo from "../assets/SVGimg/linkedin.svg";
import email from "../assets/SVGimg/email.svg";
import github from "../assets/SVGimg/github.svg";

function Footer() {
  return (
    <section className="footer">
      <a href="http://wa.link/mj3ahm" target="_blank">
        <img src={whatsapp} alt="whatsapp logo" />
      </a>
      <a
        href="https://www.linkedin.com/in/nicolas-olmos-a7a1ba261/"
        target="_blank"
      >
        <img src={linkedinLogo} alt="linkedin logo" />
      </a>
      <a href="https://github.com/nicolasnos/" target="_blank">
        <img src={github} alt="github logo" />
      </a>
      <a href="mailto: nicolas.nos27@gmail.com">
        <img src={email} alt="email logo" />
      </a>
    </section>
  );
}

export default Footer;
