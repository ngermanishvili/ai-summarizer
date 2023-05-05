import { useState, useEffect } from "react";
import { copy, linkIcon, loader, tick } from "../assets";

const Demo = () => {
  const [article, setarticle] = useState({
    url: "",
    summary: "",
  });

  const handleSubmit = async (e) => {
   
  };

  return (
    <section className="mt-16 w-full max-w-xl flex justify-center ">
      {/* search */}
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="link-icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />

          <input
            type="url"
            placeholder="Paste the article link"
            value={article.url}
            onChange={(e) => setarticle({ ...article, url: e.target.value })}
            required
            className=" block w-full rounded-md border:border-gray-200 bg-white py-2.5 pl-10 pr-12 text-sm shadow-lg font-satoshi font-medium focus: border-black focus:outline-none focus:ring-0 peer"
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700 "
          >
            <p>↵</p>
          </button>
        </form>
        {/* browser url history  */}
      </div>

      {/* display results */}
    </section>
  );
};

export default Demo;
