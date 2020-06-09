import React from "react";
import ReactDOM from "react-dom";

import SeriesDate from "../series_data";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SeriesDate />, div);
});
