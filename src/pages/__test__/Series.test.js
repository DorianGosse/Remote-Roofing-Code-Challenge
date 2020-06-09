import React from "react";
import ReactDOM from "react-dom";

import SeriesPage from "../Series";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SeriesPage />, div);
});
