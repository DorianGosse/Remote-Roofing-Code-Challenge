import React from "react";
import ReactDOM from "react-dom";

import MoviesPage from "../Movies";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MoviesPage />, div);
});
