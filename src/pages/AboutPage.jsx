import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import {motion} from "framer-motion"
function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-white"
    >
      <Nav />
      <section className="absolute z-20 inset-0 w-full h-[80vh] aboutHero text-white font-mathilga flex flex-col items-center justify-center">
        <h1 className="who text-[7rem] gold py-4 pb-[0.8rem] z-20">
          Who we are
        </h1>
        <p className="who text-center w-[800px] pb-[0.6rem] z-20">
          "Cuisine is both an art and a science: it is an art when it strives to
          bring about the realization of the true and the beautiful, called le
          bon (the good) in the order of culinary ideas."
        </p>
        <p className=" text-center w-[800px] pb-[0.6rem] z-20">
          Lucien Tendret
        </p>
        <div className="overlay absolute inset-0 w-full h-[80vh] z-10 bg-black opacity-80"></div>
      </section>
      <section className="h-[70vh]"></section>
      <section id="Main">
        <div
          id="Main__one"
          className="h-[100vh] w-full flex px-10 py-4 gap-[4rem] justify-evenly items-center"
        >
          <div className="Main__one__text w-[34%]">
            <p className="leading-[1.6] pt-[0.825rem] text-[1.2rem] gold font-oldStandardTT">
              NUTRITION AND TASTE
            </p>
            <hr />
            <h1 className="font-mathilga pt-4  text-5xl">
              QUALITY &amp; <br />
              BALANCED FOOD
            </h1>
            <p className="leading-[1.6] font-oldStandardTT pt-[0.825rem] text-[1.2rem]">
              We provide you food, harmony, and fun. Since 1998, we have been
              producing amazing meals and giving a memorable dining experience.
            </p>
            <p className="leading-[1.6] font-oldStandardTT pt-[0.825rem] text-[1.2rem]">
              We regard our consumers as guests at a party, with ourselves as
              the hosts. Every day, we strive to improve every critical part of
              the client experience.
            </p>
          </div>
          <div id="Main__one__image" className="w-[50%] flex pr-10 relative">
            <img
              className=" w-[400px] h-[550px]"
              src="./img/dinesh-ramaswamy-p-sEkj6-hAM-unsplash.jpg"
              alt=""
            />
            <img
              className=" w-[400px] h-[550px] absolute top-28 right-10"
              src="./img/jason-leung-poI7DelFiVA-unsplash.jpg"
              alt=""
            />
          </div>
        </div>
        <div
          id="Main__two "
          className="h-[100vh] w-full flex px-10 py-4 gap-[4rem] justify-evenly items-center"
        >
          <div id="Main__two__image" className="w-[50%] flex relative">
            <img
              className="one  w-[400px] h-[550px]"
              src="./img/markus-spiske-_GM0Zvw3PzY-unsplash.jpg"
              alt=""
            />
            <img
              className="two  w-[400px] h-[550px] absolute top-28 right-10"
              src="./img/pexels-yente-van-eynde-2403392.jpg"
              alt=""
            />
          </div>
          <div id="Main__two__text" className="w-[40%]">
            <p className="leading-[1.6] pt-[0.825rem] text-[1.2rem] gold font-oldStandardTT">
              FABULOUS TASTE JOURNEY
            </p>
            <hr />
            <h1 className="font-mathilga pt-4  text-5xl">OUR PHILOSOPHY</h1>
            <p className="leading-[1.6] font-oldStandardTT pt-[0.825rem] text-[1.2rem]">
              Straightforward and harmonious. Auleria combines flavors and
              specialties from throughout the world to create our own gourmet
              universe, full of unexpected craftsmanship.
            </p>
            <p className="leading-[1.6] font-oldStandardTT pt-[0.825rem] text-[1.2rem]">
              "I traversed the world, experiencing and learning about the
              uniqueness of each local speciality dish. Working with different
              chefs and restaurants is really beneficial to me. Chefs in Japan,
              Thailand, Sweden, Mexico, and elsewhere have diverse mindsets and
              approaches to ingredients."
            </p>
            <p className="text-[3rem] font-rouge p-[1.875rem]">
              Theodor Maximilian
            </p>
          </div>
        </div>
        <div
          id="Main__three"
          className="mt-10 h-[70vh] w-full aboutCarousel flex flex-col font-oldStandardTT "
        >
          <div className="overlay1 absolute bg-black w-full h-[70vh] opacity-90 z-[2]"></div>
          <div
            id="testimonials"
            /*style={{ transform: "translateX(-200vw)", transition: "all 1s ease-in "}}*/
            className="p-0 m-0 w-fit h-[80%] flex items-center justify-around z-10"
          >
            <div className="p-[2.25rem] w-[100vw] h-[100%] flex items-center justify-evenly text-center">
              <div className="flex flex-col items-center leading-[2] pt-[5.25rem]">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br /> Repudiandae Est nam enim id sapiente vel!
                </p>
                <img
                  src="./img/users/brooke-cagle-nNj_e121IbI-unsplash.jpg"
                  alt=""
                  className="w-[120px] h-[120px] rounded-[50%] mx-[1.25rem] object-cover"
                />
                <p>Alyce Wayne</p>
                <p className="text-[0.95rem] text-gray-500">Blogger</p>
              </div>
              <div className="flex flex-col items-center leading-[2] pt-[5.25rem]">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br /> Repudiandae Est nam enim id sapiente vel!
                </p>
                <img
                  src="./img/users/jack-finnigan-rriAI0nhcbc-unsplash.jpg"
                  alt=""
                  className="w-[120px] h-[120px] rounded-[50%] mx-[1.25rem] object-cover"
                />
                <p>Jack Finnigan</p>
                <p className="text-[0.95rem] text-gray-500">Blogger</p>
              </div>
              <div className="flex flex-col items-center leading-[2] pt-[5.25rem]">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br /> Repudiandae Est nam enim id sapiente vel!
                </p>
                <img
                  src="./img/users/pexels-linkedin-sales-navigator-2182970.jpg"
                  alt=""
                  className="w-[120px] h-[120px] rounded-[50%] mx-[1.25rem] object-cover"
                />
                <p>Alyce Wayne</p>
                <p className="text-[0.95rem] text-gray-500">Blogger</p>
              </div>
            </div>
            <div className="p-[2.25rem] w-[100vw] h-[100%] flex items-center justify-evenly text-center">
              <div className="flex flex-col items-center leading-[2] pt-[5.25rem]">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br /> Repudiandae Est nam enim id sapiente vel!
                </p>
                <img
                  src="./img/users/profile-1.jpg"
                  alt=""
                  className="w-[120px] h-[120px] rounded-[50%] mx-[1.25rem] object-cover"
                />
                <p>Alyce Wayne</p>
                <p className="text-[0.95rem] text-gray-500">Blogger</p>
              </div>
              <div className="flex flex-col items-center leading-[2] pt-[5.25rem]">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br /> Repudiandae Est nam enim id sapiente vel!
                </p>
                <img
                  src="./img/users/profile-2.jpg"
                  alt=""
                  className="w-[120px] h-[120px] rounded-[50%] mx-[1.25rem] object-cover"
                />
                <p>Alyce Wayne</p>
                <p className="text-[0.95rem] text-gray-500">Blogger</p>
              </div>
              <div className="flex flex-col items-center leading-[2] pt-[5.25rem]">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br /> Repudiandae Est nam enim id sapiente vel!
                </p>
                <img
                  src="./img/users/profile-3.jpg"
                  alt=""
                  className="w-[120px] h-[120px] rounded-[50%] mx-[1.25rem] object-cover"
                />
                <p>Alyce Wayne</p>
                <p className="text-[0.95rem] text-gray-500">Blogger</p>
              </div>
            </div>
            <div className="p-[2.25rem] w-[100vw] h-[100%] flex items-center justify-evenly text-center">
              <div className="flex flex-col items-center leading-[2] pt-[5.25rem]">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br /> Repudiandae Est nam enim id sapiente vel!
                </p>
                <img
                  src="./img/users/profile-4.jpg"
                  alt=""
                  className="w-[120px] h-[120px] rounded-[50%] mx-[1.25rem] object-cover"
                />
                <p>Alyce Wayne</p>
                <p className="text-[0.95rem] text-gray-500">Blogger</p>
              </div>
              <div className="flex flex-col items-center leading-[2] pt-[5.25rem]">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br /> Repudiandae Est nam enim id sapiente vel!
                </p>
                <img
                  src="./img/users/profile-5.jpg"
                  alt=""
                  className="w-[120px] h-[120px] rounded-[50%] mx-[1.25rem] object-cover"
                />
                <p>Alyce Wayne</p>
                <p className="text-[0.95rem] text-gray-500">Blogger</p>
              </div>
              <div className="flex flex-col items-center leading-[2] pt-[5.25rem]">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br /> Repudiandae Est nam enim id sapiente vel!
                </p>
                <img
                  src="./img/users/jack-finnigan-rriAI0nhcbc-unsplash.jpg"
                  alt=""
                  className="w-[120px] h-[120px] rounded-[50%] mx-[1.25rem] object-cover"
                />
                <p>Alyce Wayne</p>
                <p className="text-[0.95rem] text-gray-500">Blogger</p>
              </div>
            </div>
          </div>
          <div className="z-10 mx-auto">
            <span
              className="text-[50px] cursor-pointer text-gray-500 font-extrabold p-[1.875rem]"
              data-number="0"
            >
              .
            </span>
            <span
              className="text-[50px] cursor-pointer text-gray-500 font-extrabold p-[1.875rem]"
              data-number="1"
            >
              .
            </span>
            <span
              className="dot white text-[50px] cursor-pointer text-gray-500 font-extrabold p-[1.875rem]"
              data-number="2"
              style={{ transform: "scale(2)" }}
            >
              .
            </span>
          </div>
        </div>
        <h1 className="hero px-[4.5rem] py-[4.5rem] gold text-6xl font-oldStandardTT font-extrabold">
          OUR HEROS
        </h1>
        <div
          id="Main__four"
          className="h-[100vh] flex justify-evenly gap-20 mx-20 leading-[2]"
        >
          <div className="mt-10">
            <img
              className="small w-[500px] h-[400px] object-cover"
              src="./img/master_chef.jpg"
              alt=""
            />
            <p className="font-rouge gold text-[1.6rem]">Head Chef</p>
            <p className="cname  font-mathilga text-[30px]">John Alba</p>
          </div>
          <div>
            <img
              src="./img/im-553177.jfif"
              alt=""
              className="h-[90vh] object-cover"
            />
            <p className="font-rouge gold text-[1.6rem]">
              Owner &amp; Head Chef
            </p>
            <p className="cname  font-mathilga text-[30px]">
              Theodor Maximilian
            </p>
          </div>
          <div className="bottom mt-[10rem]">
            <img
              className="w-[500px] h-[400px] object-cover"
              src="./img/CIV Sept 26.png"
              alt=""
            />
            <p className="font-rouge gold text-[1.6rem]">Dessert Chef</p>
            <p className="cname font-mathilga text-[30px]">Alexa Brown</p>
          </div>
        </div>
      </section>
      <h1 className="hero text-center gold text-6xl mt-[11.5rem] font-oldStandardTT font-extrabold">
        Gallery
      </h1>
      <section
        id="gallery"
        className="h-[250vh] flex items-center justify-evenly mb-[3.625rem]"
      >
        <div className="first mt-[7rem] flex flex-col items-center gap-[1.875rem]">
          <div className="leftTop w-[450px] h-[350px]">
            <video className="object-fill w-full h-full" autoplay="" loop="">
              <source src="./img/braised-11618.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <img
            className="middleLong w-[450px] h-[550px]"
            src="./img/martin-widenka-tkfRSPt-jdk-unsplash.jpg"
            alt=""
          />
          <img
            className="leftTop w-[450px] h-[350px]"
            src="./img/toa-heftiba-Cf_Df-Zl8iw-unsplash.jpg"
            alt=""
          />
        </div>
        <div className=" flex flex-col items-center gap-[1.875rem]">
          <img
            className="middleTop1 w-[450px] h-[500px]"
            src="./img/alexandra-golovac--Qe0rpF2ThY-unsplash (1).jpg"
            alt=""
          />
          <video
            autoplay=""
            width="450"
            height="850"
            loop=""
            className="object-fill h-[550px]"
          >
            <source src="./img/video (1).mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <img
            className="middleTop1 w-[450px] h-[500px]"
            src="./img/tim-chow-MhpxHv0FKtE-unsplash.jpg"
            alt=""
          />
        </div>
        <div className=" flex flex-col items-center gap-[1.875rem]">
          <img
            className="rightTop w-[450px] h-[300px] "
            src="./img/sebastian-coman-photography-Co-T6odt0es-unsplash.jpg"
            alt=""
          />
          <img
            className="middle w-[450px] h-[750px]"
            src="./img/jennifer-burk-gwBcamFtPr4-unsplash.jpg"
            alt=""
          />
          <div className="rightTop w-[450px] h-[300px]">
            <video
              autoplay=""
              loop=""
              className="object-fill w-full h-full"
              width="320"
              height="550"
            >
              <source src="./img/prawn-11659.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
      <hr className="mx-12" />
      <Footer />
    </motion.div>
  );
}

export default (AboutPage);
