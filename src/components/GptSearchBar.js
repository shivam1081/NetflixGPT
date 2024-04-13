import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS, MOCK_GPT_MOVIES } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  // Search Movie in TMDB Database
  const searchMovieTmdb = async (movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    // Make an API call to GPT API and get Movie Results

    // Commenting the below api as we are not having open ai api free trail
    // const gptQuery =
    //   "Act as a Movie Recommendation system and suggest some movies for the query:" +
    //   searchText.current.value +
    //   "only give me names of 5 movies,comma separated like the example result given ahead. Example Result: Gadar,Sholay,DON,Duster,Koi mil gaya";

    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });

    // console.log(gptResults.choices);
    // const gptMovies=gptResults.choices?.[0]?.message?.content.split(",")

    //Using mock data to proceed
    const gptMovies = MOCK_GPT_MOVIES.split(",");

    // For each movie we will search TMDB APIs

    const promiseArray = gptMovies.map((movie) => searchMovieTmdb(movie));

    // We will get array of promises that will be 5 in count.

    const tmdbResult = await Promise.all(promiseArray);

    console.log(tmdbResult);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResult })
    );
  };

  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 opacity-90"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 text-xs md:text-lg"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg text-xs  md:text-xl col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
