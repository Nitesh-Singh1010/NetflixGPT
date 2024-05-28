import React from "react";
import lang from "../languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const currentLang = useSelector((store) => store.appConfig.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[currentLang].gptSearchPlaceholder}
        />
        <button className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3">
          {lang[currentLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
