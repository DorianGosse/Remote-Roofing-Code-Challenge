import React from "react";
import SeriesData from "./json_data/series_data";
/*
 * Series component or page imports and returns all the series from the hosted JSON list by importing
 * SeriesData from the series_data file in the json_data file. The css used for this component is the css
 * found in the json_data file (movies_series.css)
 */
const Series = () => {
  return (
    <div>
      <SeriesData />
    </div>
  );
};

export default Series;
