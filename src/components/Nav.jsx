import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav id="nav" className="z-20 flex justify-between px-10 py-5 font-montserrat">
      <div className="">
        <p className="gold text-3xl font-oldStandardTT">Aurelia</p>
      </div>
      <div className="flex text-xl font-montserrat gap-4 items-center justify-center pr-5 leading-6 links1 ">
        <Link className="links1 gold" to="/about">
          About
        </Link>
        <Link className="links1 gold" to="/menu">
          Menu
        </Link>
        <Link className="links1 gold" to="/contact">
          Contact
        </Link>
        <Link className="links1 gold" to="/event">
          Event
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
