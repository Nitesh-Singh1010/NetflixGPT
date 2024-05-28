import React, { useRef } from "react";
import lang from "../languageConstants";
import { useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../Constants";
const GptSearchBar = () => {
  const searchText = useRef(null);
  const currentLang = useSelector((store) => store.appConfig.lang);
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" + movie,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  // const handleGptSearchClick = async () => {
  //   const gptQuery =
  //     "Act as a movie recommendation system and suggest some movies for the query:" +
  //     searchText.current.value +
  //     ". Only give me names of 5 movies, like the example result given ahead. Example result: Welcome, Hero, Bike, Tarzan, Dabang";

  //   const retryFetch = async (retries) => {
  //     for (let i = 0; i < retries; i++) {
  //       try {
  //         const gptResults = await openai.chat.completions.create({
  //           messages: [{ role: "user", content: gptQuery }],
  //           model: "gpt-3.5-turbo",
  //         });
  //         return gptResults;
  //       } catch (error) {
  //         if (i === retries - 1) throw error;
  //       }
  //     }
  //   };

  //   try {
  //     const gptResults = await retryFetch(3);
  //     if (!gptResults.choices) {
  //       alert("Couldn't process the request");
  //       return;
  //     }

  //     const gptMovies = gptResults?.choices[0]?.message?.content.split(",");
  //     const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
  //     const tmdbResults = await Promise.all(promiseArray);
  //     console.log(tmdbResults);
  //   } catch (error) {
  //     console.error("Failed to fetch GPT results:", error.message);
  //     alert(
  //       "Failed to fetch GPT results. Please check your internet connection and try again."
  //     );
  //   }
  // };

  const handleGptSearchClick = async () => {
    // console.log(searchText.current.value)
    // make an api call to gpt api and get movie results
    const gptQuery =
      "Act as a movie reccomendation system and suggest some movies for the query:" +
      searchText.current.value +
      ". Only give me names of 5 movies,  like the example result given ahead. Example result : Welcome,Hero, Bike, Tarzan, Dabang";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      alert("Couldn't process the request");
    }
    // console.log(gptResults?.choices[0]?.message?.content);
    const gptMovies = gptResults?.choices[0]?.message?.content.split(",");
    // console.log(gptMovies);
    // console.log(searchMovieTMDB(gptMovies[0]))

    // const foundMovie=searchMovieTMDB(gptMovies[0])
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err.message));
    //   console.log

    const promiseArray = gptMovies.map((movie) => {
      return searchMovieTMDB(movie);
    });
    // console.log(promiseArray)
    // //[ Promise, Promise, Promise, Promise, Promise]
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[currentLang].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[currentLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
