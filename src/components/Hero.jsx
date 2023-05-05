import React from "react";
import "tailwindcss/tailwind.css";
import luffylogo from "../assets/luffylogo.png";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between p-10 items-center w-full mb-10 pt-3 my-4">
        <p className="flex font-satoshi text-black font-extrabold	text-2xl truncate">
          Nika Germanishvili
        </p>

        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/ngermanishvili", "_blank")
          }
          className="rounded-full border border-black bg-black py-1.5 px-5 text-sm text-white transition-all hover:bg-white hover:text-black !important; 
          absolute right-2 "
        >
          GitHub
        </button>
      </nav>

      <h1 className="mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-center">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
          OpenAI GPT-4
        </span>
      </h1>
      <div className="flex justify-between">
        <img
          src={luffylogo}
          alt="sumz_logo"
          className="w-32 h-[200px] absolute right-20 opacity-20 sm:opacity-100"
        />
      </div>
      <h2 className="mt-5 text-lg text-gray-600 sm:text-xl text-center max-w-2xl">
        Say goodbye to long and complicated articles! Summize is the ultimate
        open-source article summarizer that makes reading a breeze. With
        Summize, you can turn any lengthy article into a clear and concise
        summary in just a few clicks. Get straight to the point and save time
        with Summize - the ultimate tool for simplifying your reading.
      </h2>
    </header>
  );
};

export default Hero;
