import React from "react";
import MovieData from "./json_data/moives_data";

/*
 * Movies component or page imports and returns all the movies from the hosted JSON list by importing
 * MovieData from the movies_data file in the json_data file. The css used for this component is the css
 * found in the json_data file (movies_series.css)
 */
const Movies = () => {
  return (
    <div>
      <MovieData />
    </div>
  );
};

export default Movies;
