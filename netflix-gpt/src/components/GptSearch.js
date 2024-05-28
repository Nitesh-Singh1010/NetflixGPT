import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSggestions from "./GptMovieSggestions";
import { BG_URL } from "../Constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          src={BG_URL}
          alt=""
        />
      </div>
      <GptSearchBar />
      <GptMovieSggestions />
    </div>
  );
};

export default GptSearch;
