import React from "react";
import { MOVIE_POSTER_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    posterPath && (
      <div className="w-48 pr-4">
        <img alt="Movie Card" src={MOVIE_POSTER_CDN_URL + posterPath} />
      </div>
    )
  );
};

export default MovieCard;
