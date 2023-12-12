import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function ContactPage() {
  return (
    <div className="text-white">
      <Nav />
      <section className="first mt-[20px] h-[70vh] flex flex-row items-center justify-evenly gap-[12.875rem] ">
        <div id="first__text" className="w-[500px] p-[10px] ">
          <h1 className="font-rouge gold text-[7.5rem] font-bold">
            <span id="cursive" className="text-[160px]">
              S
            </span>
            tay with us
          </h1>
          <p className="text-[1.1rem] leading[1.3] pt-[20px] font-oldStandardTT">
            If you have any questions please contact us with the indicated
            contact details or by filling out the form below
          </p>
        </div>
        <div className="container w-[450px] h-[340px] relative mt-[8%]">
          <div id="spin">
            <img
              src="./img/Screenshot 2023-03-11 200809.png"
              alt=""
              className="w-[220px] h-[250px] absolute"
            />
            <img
              src="./img/Screenshot 2023-03-11 200923.png"
              alt=""
              className="w-[220px] h-[250px] absolute"
            />
            <img
              src="./img/Screenshot 2023-03-11 214801.png"
              alt=""
              className="w-[220px] h-[250px] absolute"
            />
            <img
              src="./img/Screenshot 2023-03-11 220116.png"
              alt=""
              className="w-[220px] h-[250px] absolute"
            />
            <img
              src="./img/Screenshot 2023-03-11 220151.png"
              alt=""
              className="w-[220px] h-[250px] absolute"
            />
            <img
              src="./img/Screenshot 2023-03-11 220221.png"
              alt=""
              className="w-[220px] h-[250px] absolute"
            />
          </div>
        </div>
      </section>
      <section
        id="second"
        className="w-full mt-7rem h-[70vh] p-[3.125rem] flex flex-col items-center font-oldStandardTT text-center justify-center "
      >
        <h2 className="text-[3rem] relative top-0 left-[3.125rem] contactTitle">
          Contacts
        </h2>
        <div>
          <p className=" gold text-xl pt-[1.625rem]">Wednesday-Thursday</p>
          <p className="text-gray-500 text-[1.2rem]">6pm - 11pm</p>
        </div>
        <div>
          <p className=" gold text-xl pt-[1.625rem]">Friday-Saturday</p>
          <p className="text-gray-500 text-[1.2rem]">1pm-11.30pm</p>
        </div>
        <div>
          <p className=" gold text-xl pt-[1.625rem]">Address</p>
          <p className="text-gray-500 text-[1.2rem]">
            lorem ipsum dolor sit amet Alle 4
          </p>
        </div>
        <div>
          <p className=" gold text-xl pt-[1.625rem]">Support</p>
          <p className="text-gray-500 text-[1.2rem]">
            +45 6023 0023 <br />
            Auleria@gmail.com
          </p>
        </div>
      </section>
      <div
        id="Third"
        className="h-[100vh] flex justify-evenly mt-5 align-middle self-center"
      >
        <div id="Third__comp" className="w-[900px] p-[3rem] pl-[3rem]">
          <h2 className="gold text-6xl font-mathilga pb-10">
            Share your joy or complaint
          </h2>
          <p className="w-[500px] text-xl font-oldStandardTT p-[2px] leading-loose">
            You can use this form if you have any concerns while utilising our
            services or visiting our restaurant. We are also open to unique
            ideas and suggestions.
          </p>
        </div>
        <form
          action="https://formsubmit.co/ruhammaashenafi202@gmail.com"
          method="POST"
          autocomplete="off"
          className="w-[800px] p-[4rem] flex flex-col"
        >
          <input
            type="hidden"
            name="_captcha"
            value="false"
            className="bg-transparent outline-none border-b-[#6a4f09] border-b-[1px] p-[10px] text-white placeholder:text-[1.01rem]"
          />
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="bg-transparent outline-none border-b-[#6a4f09] border-b-[1px] p-[10px] text-white placeholder:text-[1.01rem]"
          />
          <input
            type="tel"
            name="Phone Number"
            id="phoneNum"
            placeholder="Phone Number"
            className="bg-transparent outline-none border-b-[#6a4f09] border-b-[1px] p-[10px] text-white placeholder:text-[1.01rem]"
          />
          <input
            type="email"
            name="Email"
            id="email"
            placeholder="Email"
            className="pt-10 bg-transparent outline-none border-b-[#6a4f09] border-b-[1px]  p-[10px] text-white placeholder:text-[1.01rem]"
            required
          />
          <input
            type="text"
            name="Feedback"
            id="Feedback"
            placeholder="What would you tell?"
            className="pt-10 pb-[130px] bg-transparent outline-none border-b-[#6a4f09] border-b-[1px] p-[10px] text-white placeholder:text-[1.01rem]"
            required
          />
          <input
            type="submit"
            value="Send > "
            id="send"
            className="border-none float-left pt-24 gold text-start font-rouge font-[900] cursor-pointer text-4xl"
          />
        </form>
      </div>
      <hr className="mx-12" />

      <Footer />
    </div>
  );
}

export default ContactPage;
