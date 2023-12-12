import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function MenuPage() {
  const [choice, setChoice] = useState("soup");
  // const soups=["./img/soup/0.jpg",]
  const soups = Array.from(
    { length: 10 },
    (_, index) => `url(./img/soup/${index}.jpg)`
  );
  const drinks = Array.from(
    { length: 10 },
    (_, index) => `url(./img/drinks/${index}.jpg)`
  );
  const salads = Array.from(
    { length: 10 },
    (_, index) => `url(./img/salads/${index}.jpg)`
  );
  const main = Array.from(
    { length: 10 },
    (_, index) => `url(./img/main/${index}.jpg)`
  );
  const fish = Array.from(
    { length: 10 },
    (_, index) => `url(./img/seafood/${index}.jpg)`
  );
  const desserts = Array.from(
    { length: 10 },
    (_, index) => `url(./img/desserts/${index}.jpg)`
  );
  return (
    <div className="text-white">
      <Nav />
      <section
        id="firstPage"
        className="relative text-white pt-[9.1rem] mt-[3.12rem] flex gap-[40px] flex-col h-[90vh] items-center justify-center"
      >
        <div id="image" className="w-[80%] h-[500px]">
          <p
            id="firstPage__text"
            className="text-[12vw] font-rouge absolute top-0 left-56 z-10 gold"
          >
            Meet The Cuisines
          </p>
        </div>
        <div
          id="firstPage__half"
          className="w-[80%] h-[400px] text-[1.5rem] font-oldStandardTT"
        >
          <p className="w-[350px]">
            Aurelia will not only awe you with its rich history, but we also
            have something to offer to you.
          </p>
          {/* <img src="./img/urban-gyllstrom-MaWMfm-HCqQ-unsplash.jpg" alt="" /> */}
          <figure></figure>
        </div>
      </section>
      <section className="p-[3.125rem]">
        <h1 className="categoriesTitle text-6xl font-oldStandardTT font-bold">
          Categories
        </h1>
        <div className="meals w-fit h-fit flex items-center justify-center flex-wrap font-rouge gap-20 py-5 pt-9 pr-[40px] gold">
          <p
            className="meals__titles px[0.5125rem] cursor-pointer hover:bg-white hover:bg-clip-text text-5xl "
            id="soup"
            onClick={() => setChoice("soup")}
            style={{ color: choice === "soup" ? "white" : "" }}
          >
            Soup
          </p>
          <p
            className="meals__titles px[0.5125rem] cursor-pointer hover:bg-white hover:bg-clip-text text-5xl"
            id="drinks"
            onClick={() => setChoice("drinks")}
          >
            Drinks
          </p>
          <p
            className="meals__titles px[0.5125rem] cursor-pointer hover:bg-white hover:bg-clip-text text-5xl"
            id="main"
            onClick={() => setChoice("main")}
          >
            Main
          </p>
          <p
            className="meals__titles px[0.5125rem] cursor-pointer hover:bg-white hover:bg-clip-text text-5xl"
            id="dessserts"
            onClick={() => setChoice("desserts")}
          >
            Desserts
          </p>
          <p
            className="meals__titles px[0.5125rem] cursor-pointer hover:bg-white hover:bg-clip-text text-5xl"
            id="salads"
            onClick={() => setChoice("salads")}
          >
            Salads
          </p>
          <p
            className="meals__titles px[0.5125rem] cursor-pointer hover:bg-white hover:bg-clip-text text-5xl"
            id="fish"
            onClick={() => setChoice("fish")}
          >
            Sea food
          </p>
        </div>
        <div
          className="font-oldStandardTT mx-10 my-auto grid gap-[2.25rem] font-extrabold text-[#5e4914] h-[200ch] "
          style={{
            gridTemplateColumns: "1.5fr repeat(2, 1fr) 0.9fr",
            gridTemplateRows: "auto",
            gridAutoFlow: "dense",
          }}
        >
          <div
            className="grid__image flex justify-start items-end one bg-center bg-cover "
            style={{
              fontSize: "clamp(0.6rem, 1.25rem, 5rem)",
              maskRepeat: "no-repeat",
              gridColumn: "span 1",
              gridRow: "span 4",
              backgroundImage:
                choice === "soup"
                  ? `${soups[0]}`
                  : choice === "drinks"
                  ? `${drinks[0]}`
                  : choice === "fish"
                  ? `${fish[0]}`
                  : choice === "desserts"
                  ? `${desserts[0]}`
                  : choice === "salads"
                  ? `${salads[0]}`
                  : choice === "main"
                  ? `${main[0]}`
                  : "",
            }}
          >
            <p className=" p-5">
              {choice === "soup"
                ? "Miso Noodle Soup"
                : choice === "drinks"
                ? "Lunar Radiance"
                : ""}
            </p>
          </div>
          <div
            className="grid__image text-end flex justify-end items-end one bg-center bg-cover "
            style={{
              fontSize: "clamp(0.6rem, 1.25rem, 5rem)",
              maskRepeat: "no-repeat",
              gridColumn: "span 3",
              gridRow: "span 5",
              backgroundImage:
                choice === "soup"
                  ? `${soups[1]}`
                  : choice === "drinks"
                  ? `${drinks[1]}`
                  : choice === "fish"
                  ? `${fish[1]}`
                  : choice === "desserts"
                  ? `${desserts[1]}`
                  : choice === "salads"
                  ? `${salads[1]}`
                  : choice === "main"
                  ? `${main[1]}`
                  : "",
            }}
          >
            <p className=" p-5">
              {choice === "soup"
                ? "Olsson"
                : choice === "drinks"
                ? "Berry Bliss"
                : ""}
            </p>
          </div>
          <div
            className="grid__image text-right one bg-center bg-cover "
            style={{
              fontSize: "clamp(0.6rem, 1.25rem, 5rem)",
              maskRepeat: "no-repeat",
              gridColumn: "span 1",
              gridRow: "span 5",
              backgroundImage:
                choice === "soup"
                  ? `${soups[2]}`
                  : choice === "drinks"
                  ? `${drinks[2]}`
                  : choice === "fish"
                  ? `${fish[2]}`
                  : choice === "desserts"
                  ? `${desserts[2]}`
                  : choice === "salads"
                  ? `${salads[2]}`
                  : choice === "main"
                  ? `${main[2]}`
                  : "",
            }}
          >
            <p className=" p-5">
              {choice === "soup"
                ? "Arledge Poisson Soup"
                : choice === "drinks"
                ? "Glided Delight"
                : ""}
            </p>
          </div>
          <div
            className="grid__image flex justify-start items-end one bg-center bg-cover "
            style={{
              fontSize: "clamp(0.6rem, 1.25rem, 5rem)",
              maskRepeat: "no-repeat",
              gridColumn: "span 2",
              gridRow: "span 4",
              backgroundImage:
                choice === "soup"
                  ? `${soups[3]}`
                  : choice === "drinks"
                  ? `${drinks[3]}`
                  : choice === "fish"
                  ? `${fish[3]}`
                  : choice === "desserts"
                  ? `${desserts[3]}`
                  : choice === "salads"
                  ? `${salads[3]}`
                  : choice === "main"
                  ? `${main[3]}`
                  : "",
            }}
          >
            <p className=" p-5">
              {choice === "soup"
                ? "Autumn Soup"
                : choice === "drinks"
                ? "Exotic Paradise"
                : ""}
            </p>
          </div>
          <div
            className="grid__image one bg-center bg-cover "
            style={{
              fontSize: "clamp(0.6rem, 1.25rem, 5rem)",
              maskRepeat: "no-repeat",
              gridRow: "span 4",
              backgroundImage:
                choice === "soup"
                  ? `${soups[4]}`
                  : choice === "drinks"
                  ? `${drinks[4]}`
                  : choice === "fish"
                  ? `${fish[4]}`
                  : choice === "desserts"
                  ? `${desserts[4]}`
                  : choice === "salads"
                  ? `${salads[4]}`
                  : choice === "main"
                  ? `${main[4]}`
                  : "",
            }}
          >
            <p className=" p-5">
              {choice === "soup"
                ? "Creamy Vegan"
                : choice === "drinks"
                ? "Evening Tranquility"
                : ""}
            </p>
          </div>
          <div
            className="grid__image flex justify-end items-end one bg-center bg-cover "
            style={{
              fontSize: "clamp(0.6rem, 1.25rem, 5rem)",
              maskRepeat: "no-repeat",
              gridColumn: "span 2",
              gridRow: "span 4",
              backgroundImage:
                choice === "soup"
                  ? `${soups[5]}`
                  : choice === "drinks"
                  ? `${drinks[5]}`
                  : choice === "fish"
                  ? `${fish[5]}`
                  : choice === "desserts"
                  ? `${desserts[5]}`
                  : choice === "salads"
                  ? `${salads[5]}`
                  : choice === "main"
                  ? `${main[5]}`
                  : "",
            }}
          >
            <p className=" p-5">
              {choice === "soup"
                ? "Grabkowska"
                : choice === "drinks"
                ? "Effervescent Citrus"
                : ""}
            </p>
          </div>
          <div
            className="grid__image one bg-center bg-cover "
            style={{
              fontSize: "clamp(0.6rem, 1.25rem, 5rem)",
              maskRepeat: "no-repeat",
              gridColumn: "span 2",
              gridRow: "span 3",
              backgroundImage:
                choice === "soup"
                  ? `${soups[6]}`
                  : choice === "drinks"
                  ? `${drinks[6]}`
                  : choice === "fish"
                  ? `${fish[6]}`
                  : choice === "desserts"
                  ? `${desserts[6]}`
                  : choice === "salads"
                  ? `${salads[6]}`
                  : choice === "main"
                  ? `${main[6]}`
                  : "",
            }}
          >
            <p className=" p-5">
              {choice === "soup"
                ? "Pumpkin Soup"
                : choice === "drinks"
                ? "Enigmatic Mint Symphony"
                : ""}
            </p>
          </div>
          <div
            className="grid__image text-right one bg-center bg-cover "
            style={{
              fontSize: "clamp(0.6rem, 1.25rem, 5rem)",
              maskRepeat: "no-repeat",
              gridColumn: "span 2",
              gridRow: "span 5",
              backgroundImage:
                choice === "soup"
                  ? `${soups[7]}`
                  : choice === "drinks"
                  ? `${drinks[7]}`
                  : choice === "fish"
                  ? `${fish[7]}`
                  : choice === "desserts"
                  ? `${desserts[7]}`
                  : choice === "salads"
                  ? `${salads[7]}`
                  : choice === "main"
                  ? `${main[7]}`
                  : "",
            }}
          >
            <p className=" p-5">
              {choice === "soup"
                ? "Vanhove"
                : choice === "drinks"
                ? "Celestial  Chill"
                : ""}
            </p>
          </div>
          <div
            className="grid__image one bg-center bg-cover "
            style={{
              fontSize: "clamp(0.6rem, 1.25rem, 5rem)",
              maskRepeat: "no-repeat",
              gridRow: "span 4",
              backgroundImage:
                choice === "soup"
                  ? `${soups[8]}`
                  : choice === "drinks"
                  ? `${drinks[8]}`
                  : choice === "fish"
                  ? `${fish[8]}`
                  : choice === "desserts"
                  ? `${desserts[8]}`
                  : choice === "salads"
                  ? `${salads[8]}`
                  : choice === "main"
                  ? `${main[8]}`
                  : "",
            }}
          >
            <p className=" p-5">
              {choice === "soup"
                ? "Cala"
                : choice === "drinks"
                ? "Golden delight"
                : ""}
            </p>
          </div>
          <div
            className="grid__image flex justify-end items-end one bg-center bg-cover "
            style={{
              fontSize: "clamp(0.6rem, 1.25rem, 5rem)",
              maskRepeat: "no-repeat",
              gridRow: "span 4",
              backgroundImage:
                choice === "soup"
                  ? `${soups[9]}`
                  : choice === "drinks"
                  ? `${drinks[9]}`
                  : choice === "fish"
                  ? `${fish[9]}`
                  : choice === "desserts"
                  ? `${desserts[9]}`
                  : choice === "salads"
                  ? `${salads[9]}`
                  : choice === "main"
                  ? `${main[9]}`
                  : "",
            }}
          >
            <p className=" p-5">
              {choice === "soup"
                ? "Jaramillo"
                : choice === "drinks"
                ? "Sunset Splash"
                : ""}
            </p>
          </div>
        </div>
      </section>
      <div
        id="main1__one"
        className="flex items-center justify-evenly pt-[10rem] "
      >
        <div
          id="main1__one__text"
          className="w-[37.5rem] h-[31.25rem] flex flex-col justify-between font-mathilga"
        >
          <div className="up">
            <p className="smaller gold font-mathilga">House specialty</p>
            <h2 className="text-4xl pb-[2.5rem] pt-[0.625rem] font-bold">
              Symphonia Volucris Sapo
            </h2>
            <p className="text-gray-400 font-mathilga font-thin">
              "Symphonia Volucris Sapor" is an exquisite Latin-inspired culinary
              masterpiece that takes center stage with succulent chicken as its
              main protagonist. This gastronomic creation is a symphony of
              flavors, expertly composed to tantalize the taste buds with a
              harmonious blend of savory, aromatic, and delectable elements.
            </p>
          </div>
        </div>
        <div id="main1__one__video" className="w-[500px] h-[700px]">
          <img src="./img/martin-widenka-tkfRSPt-jdk-unsplash.jpg" alt="" />
        </div>
      </div>
      <hr className="mx-12" />
      <Footer />
    </div>
  );
}

export default MenuPage;
