import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function EventPage() {
  return (
    <div>
      <Nav />
      <section className="absolute z-20 inset-0 w-full h-[80vh] text-white font-mathilga flex flex-col items-center justify-center">
        <h1 className="who text-[7rem]  gold py-4 pb-[0.125rem] z-20">
          Our Events
        </h1>
        <p className="who text-center w-[800px] pb-[0.6rem] z-20 text-[1.06rem]">
          Hunger is not the main reason to come to us. <br />
          Aurelia is a place where you can have a good time.
        </p>
        <video
          autoplay
          loop
          width="600"
          height="500"
          className="absolute inset-0 w-full h-[80vh] object-fill z-[4]"
        >
          <source src="./img/video (2).mp4" type="video/mp4" />
          The browser doesn't support this videos format.
        </video>
        <div className="overlay absolute inset-0 w-full h-[80vh] z-10 bg-black opacity-90"></div>
      </section>
      <section className="h-[70vh]"></section>
      <section
        id="main1"
        className="text-white py-[4.8rem] px-[3.75rem] font-mathilga"
      >
        <div
          id="main1__one"
          className="flex items-center justify-evenly pb-[10rem]"
        >
          <div
            id="main1__one__text"
            className="w-[37.5rem] h-[31.25rem] flex flex-col justify-between"
          >
            <div className="up">
              <p className="smaller gold font-mathilga">UPCOMING EVENT</p>
              <h2 className="text-[2.875rem] pb-[2.5rem] pt-[0.625rem] font-bold">
                Master class from our chef
              </h2>
              <p className="text-gray-400">
                The master class allows anybody to learn how to prepare and
                design food like a professional chef. The guest will see the
                work of specialists in their area, carefully following all
                directions, and will also discover the secrets of the flavor and
                design of the meals.
              </p>
            </div>
            <p className="date">
              January,5<sup>th</sup> <br />
              1-5 PM
            </p>
          </div>
          <div id="main1__one__video" className="bg-pink-900">
            <video
              autoPlay
              loop
              width="600"
              height="500"
              className="object-fill "
            >
              <source src="./img/production ID_4253350.mp4" type="video/mp4" />
              The browser doesn't support this videos format.
            </video>
          </div>
        </div>
        <div id="main1__two" className="p-[1.25rem] pb-[10rem]">
          <div className="titlePointer flex justify-between pb-2">
            <h2 className="text-5xl font-bold">Future events</h2>
            <p className="gold font-rouge text-4xl">
              <span id="left" className="cursor-pointer text-[2.875rem]">
                &lt;
              </span>{" "}
              1/14
              <span id="right" className="cursor-pointer text-[2.875rem]">
                {" "}
                &gt;
              </span>
            </p>
          </div>
          <div id="main1__two__images" className="w-[200%] flex gap-[2.5rem]">
            <div className="box w-[550px] h-[400px] bg-green-950 flex flex-col justify-end p-[1.25rem]">
              <p className="text-[1.775rem]">Vegetable triumph</p>
              <p className="text-gray-500 font-oldStandardTT text-xl">
                On these days we specify,only vegetable based meals are served
                in our restaurant.Don't miss thes healthy and delicious dishes.
              </p>
            </div>
            <div className="box w-[550px] h-[250px] bg-green-950 flex flex-col justify-end p-[1.25rem]">
              <p className="text-[1.775rem]">Smoked brisket with apple</p>
              <p className="text-gray-500 font-oldStandardTT text-xl">
                This dish,which is the chef's special reciepe is so beautiful
                and unique that it will make you eat your fingers.Be sure to try
                it!
              </p>
            </div>
            <div className="box w-[550px] h-[400px] bg-green-950 flex flex-col justify-end p-[1.25rem]">
              <p className="text-[1.775rem]">Happy Hour 50% off</p>
              <p className="text-gray-500 font-oldStandardTT text-xl">
                Discount is applied for any meal or beverages that are ordered
                at our special restaurant today don't miss this opportunity.
              </p>
            </div>
            <div className="box w-[550px] h-[250px] bg-green-950 flex flex-col justify-end p-[1.25rem]">
              <p className="text-[1.775rem]">Acoustic night</p>
              <p className="text-gray-500 font-oldStandardTT text-xl">
                Enjoy Acoustic night with friends and .EAT-DRINK-SING!
              </p>
            </div>
            <div className="box w-[550px] h-[400px] bg-green-950 flex flex-col justify-end p-[1.25rem]">
              <p className="text-[1.775rem]">Special wine</p>
              <p className="text-gray-500 font-oldStandardTT text-xl">
                Our special wines are prepared and we keep them for you over the
                years until they have a unique taste.
              </p>
            </div>
            <div className="box w-[550px] h-[250px] bg-green-950 flex flex-col justify-end p-[1.25rem]">
              <p className="text-[1.775rem]">Happy Hour 50% off</p>
              <p className="text-gray-500 font-oldStandardTT text-xl">
                Discount is applied for any meal or beverages that are ordered
                at our special restaurant today don't miss this opportunity.
              </p>
            </div>
          </div>
        </div>
        <div
          id="main1__three"
          className="py-[4.375rem] px-[1.25rem] pb-[10rem] flex justify-between"
        >
          <div id="main1__three__image" className="w-[550px]">
            <h1 className="pb-[2.5rem] text-5xl">Past events</h1>
            <img
              src="./img/pexels-cottonbro-studio-9419219.jpg"
              alt=""
              className="w-[500px] h-[43.75rem]"
            />
          </div>
          <div id="main1__three__text" className="mt-[5.25rem] w-[47.75rem]">
            <p className="text-[30px] pb-[1.25rem]">Live music evening</p>
            <p className="text-gray-500 w-[550px] font-oldStandardTT pb-1.25rem">
              spend a nice time with unique and unforgettable music with our
              special artists tonight.
            </p>
            <hr className="my-[2.175rem]" />
            <p className="text-[30px] pb-[1.25rem]">Special wine</p>
            <p className="text-gray-500 w-[550px] font-oldStandardTT pb-1.25rem">
              Our special wines are prepared and we keep them for you over the
              years until they have a unique taste.
            </p>
            <hr className="my-[2.175rem]" />
            <p className="text-[30px] pb-[1.25rem]">Happy hour 20% off</p>
            <p className="text-gray-500 w-[550px] font-oldStandardTT pb-1.25rem">
              Discount is applied for any meal or beverages that are ordered at
              our special restaurant today don't miss this opportunity.
            </p>
            <hr className="my-[2.175rem]" />
            <p className="text-[30px] pb-[1.25rem]">Gatsby night</p>
            <p className="text-gray-500 w-[550px] font-oldStandardTT pb-1.25rem">
              On this night all staff members dress up according to the theme of
              this night.Also,some cocktails are provided at the expense of our
              institution.
            </p>
            <hr />
          </div>
        </div>
      </section>
      <hr className="mx-12" />
      <Footer />
    </div>
  );
}

export default EventPage;
