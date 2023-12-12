import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div className="font-oldStandardTT">
      <section className="homeNav  flex justify-between items-center text-white  px-10 py-5">
        <div className="flex flex-col items-center justify-center pl-5">
          <p className="text-6xl font-rouge gold">Aurelia</p>
          <p className="text-sm text-gray-500">restaurant</p>
        </div>
        <div className="text-xs">
          {/* <p>
            New clients are always welcome here, <br />
            so contact as soon as you can to make your reservation.
          </p> */}
        </div>
        <div className="flex flex-col gap-2 items-center justify-center pr-5 leading-6 links ">
          <Link className="links" to="/about">
            About
          </Link>
          <Link className="links" to="/menu">
            Menu
          </Link>
          <Link className="links" to="/event">
            Event
          </Link>
          <Link className="links" to="/contact">
            Contact
          </Link>
        </div>
      </section>
      <section className="text-white ml-20 mt-10">
        <img
          src="./img/chandelier.jpg"
          alt=""
          className=" absolute top-0 right-0 h-[700px] w-[50%] object-cover rounded-bl-[40%] -z-20"
        />
        <h1 className="font-felidae font-thin text-[125px] leading-[10rem] ">
          YOUR OPULENT <span className="ml-[15rem]">RESTAURANT</span>
          <br />
          <span className="ml-20"> AURELIA</span>
        </h1>
      </section>
      <section
        id="aOne"
        className="flex justify-evenly h-fit mt-[14rem] text-white "
      >
        <div className="w-[25%] h-full ">
          <h2 className="pb-8 text-6xl font-bold">
            Aurelia's kitchen <br />
            is dynamic
          </h2>
          <p className="text-xl pb-5">
            The tasting menu sees dishes each highly creative and original,with
            many layers of flavour.
          </p>
          <Link to="/menu" className="gold font-rouge text-3xl">
            Menu &gt;
          </Link>
        </div>
        <img
          src="./img/meals.jpg"
          alt=""
          className="w-[500px] h-[700px] object-center object-cover"
        />
        <p className="w-[25%]  flex flex-end text-xl self-end">
          Dynamic refers to the living, forming forces of nature and denotes
          force. Although these forces are invisible, their biological traces
          exist. If one learns to see and comprehend the relationships between
          the formative forces and the physical stuff of all species, the
          results may be observed.
        </p>
      </section>
      <section>
        <p className="special text-[5.625rem] z-1 text-white mt-[15rem] font-mathilga ml-20">
          A <span className="-z-[2]">SPECIAL</span> VENUE WHERE SIMPLICITY AND
          LUXURY COME TOGETHER
        </p>
        <div className="relative bg-pink">
          <img
            className=" absolute cover w-[250px] top-[-350px] left-[150px] -z-[1]"
            src="./img/baklava.jpg"
            alt=""
          />
          <img
            className=" absolute cover w-[300px] top-[-70px] left-[620px] opacity-90 z-[2]"
            src="./img/fish.jpg"
            alt=""
          />
          <img
            className=" absolute cover w-[250px] top-[-500px] right-[150px] opacity-70 z-[2]"
            src="./img/drinks.jpg"
            alt=""
          />
        </div>
      </section>
      <section className="text-white ml-[6rem] mt-[20rem]">
        <h1 className="text-7xl explore ">Explore our menu</h1>
        <p className="tx w-[37.5rem] text-xl">
          Our chef's has accurate volume of ingredients,creating synergy between
          flavour,aestheticism and a sense of flow that runs throughout the
          menu.
        </p>
        <Link to="/menu" className="gold font-rouge text-[3rem]">
          Explore &gt;
        </Link>
        <div
          id="menuSlides"
          className="flex justify-between py-[8rem] w-[160%]"
        >
          <div className="w-[300px]" id="so">
            <p className="text-3xl gold">Soup</p>
            <img
              src="./img/soup/0.jpg"
              alt=""
              className="w-[300px] h-[500px] object-cover object-center"
            />
          </div>
          <div className="w-[300px] text-right" id="ma">
            <img
              src="./img/soup/1.jpg"
              alt=""
              className="w-[300px] h-[500px] object-cover object-center"
            />
            <p className="text-3xl gold">Main</p>
          </div>
          <div className="w-[300px] " id="des">
            <p className="text-3xl gold">Salads</p>
            <img
              src="./img/soup/2.jpg"
              alt=""
              className="w-[300px] h-[500px] object-cover object-center"
            />
          </div>
          <div className="w-[300px] text-right" id="fis">
            <img
              src="./img/soup/3.jpg"
              alt=""
              className="w-[300px] h-[500px] object-cover object-center"
            />
            <p className="text-3xl gold">Fish</p>
          </div>
          <div className="w-[300px] " id="dr">
            <p className="text-3xl gold">Drinks</p>
            <img
              src="./img/soup/4.jpg"
              alt=""
              className="w-[300px] h-[500px] object-cover object-center"
            />
          </div>
          <div className="w-[300px] text-right" id="sm">
            <img
              src="./img/soup/5.jpg"
              alt=""
              className="w-[300px] h-[500px] object-cover object-center"
            />
            <p className="text-3xl gold">Smth</p>
          </div>
        </div>
      </section>
      <section className="relative ">
        <div className="hide text-lg text-white w-[700px] text-center absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20 leading-10">
          <p className="text-2xl pb-5">
            Join us for an evening of great food, drinks, and entertainment, and
            be sure to check out our upcoming events to see what we have planned
            next. Whether you're looking for a night out with friends or a
            romantic evening with your significant other, we have something for
            everyone at Aurelia.
          </p>
          <Link
            to="/events"
            className="bg-white gold cursor-pointer px-10 pt-10"
          >
            Events{" "}
          </Link>
        </div>
        <div className="relative z-10">
          <img
            src="./img/venue.jpg"
            className="w-full h-[500px] object-cover"
            alt="venue"
          />
          <div className="absolute bg-black top-0 right-0 h-[500px] w-full opacity-80 "></div>
        </div>
      </section>
      <hr />
      <Footer />
    </div>
  );
}

export default HomePage;
