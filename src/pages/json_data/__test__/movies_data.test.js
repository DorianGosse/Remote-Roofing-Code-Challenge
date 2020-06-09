import React from "react";
import ReactDOM from "react-dom";

import MoviesData from "../moives_data";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MoviesData />, div);
});
