import React from "react";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer
      style={{ "grid-template-columns": "1fr 1fr 1fr 2fr" }}
      className="text-white grid  h-30vh p-5 leading-1.5 gap-0  py-10 px-10"
    >
      <div id="logo" className="text-8xl font-rouge gold">
        <Link to="/">A</Link>
      </div>
      <div id="navigation" className="flex flex-col gap-2">
        <h2 className="text-xl pb-2 font-bold">Navigation</h2>

        <Link to="/about" className="opacity-80 block">
          About us
        </Link>
        <Link to="/menu" className="opacity-80 block">
          Menu
        </Link>
        <Link to="/events" className="opacity-80 block">
          Events
        </Link>
        <Link to="/contact" className="opacity-80 block">
          Contact
        </Link>
      </div>
      <div id="Contacts" className="flex flex-col gap-2">
        <h2 className="text-xl pb-2 font-bold">Contacts</h2>
        <p className="opacity-80">+45 8898 0014</p>
        <p className="opacity-80">Aurelia@gmail.com</p>
        <p className="opacity-80">lorem ipsum dolor sit amet lorom dolr amet</p>
      </div>
      <div id="email" className="px-[60px] ">
        <h2 className="text-xl pb-2 font-bold">Stay up to date</h2>
        <div className="flex justify-between items-center pb-3">
          <p className="opacity-80 pt-[12px]">Email</p>
          <Link
            href="mailto: Aurelia@gmail.com"
            id="arrow"
            className="font-rouge gold text-3xl"
          >
            &#8594;
          </Link>
        </div>
        <hr className="gold" />
        <p id="terms" className="opacity-80 text-[0.8rem] pt-4">
          Pressing the button you agree with the terms of the newsletter and
          with the privacy policy and the processing of personal data
        </p>
        <div className="flex gap-7 mt-4">
          <BsInstagram
            size={25}
            className="hover:cursor-pointer text-[#8e7925]"
          />
          <FaFacebookSquare
            size={25}
            className="hover:cursor-pointer text-[#8e7925]"
          />
          <BsTwitterX
            size={25}
            className="hover:cursor-pointer text-[#8e7925]"
          />
        </div>{" "}
      </div>
    </footer>
  );
}

export default Footer;
