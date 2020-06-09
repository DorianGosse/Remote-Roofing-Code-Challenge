import React from "react";

import "./error.css";

/*
 * Error.js is the component displayed in the body of the application when there is no matching link
 * searched in address bar, or if for some reason the link is broken or some other error occors.
 *
 * NOTE: Even though the error page displays there is no matching url found, the user still has the ability to
 * navigate using links in the navBar or Footer components as they're globaly rendered components
 */
const Error = () => {
  return (
    <img
      className="error-img"
      src={require("../assets/404-error.jpg")}
      alt="error-img"
    />
  );
};

export default Error;
