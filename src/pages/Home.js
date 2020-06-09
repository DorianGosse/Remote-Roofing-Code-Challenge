import React from "react";

import "./home.css";

/*
 * Home page component is the component that displays the home page of the application
 *
 * In the home page component, there are links used to navigate through the rest of the website such
 * as the movies and series pages.
 */

export default function Home() {
  return (
    <div>
      <ul className="main-category-list">
        <li>
          <a href="/series">
            <img src={require("../assets/series-tile.png")} alt="Series-tile" />
          </a>
        </li>
        <li>
          <a href="/movies">
            <img src={require("../assets/movies-tile.png")} alt="movies-tile" />
          </a>
        </li>
      </ul>
      {/* this isn't maintainable this should be in some kind of object with vals pointing to a string var with 'pop serirs...' and images 
        and be placed in one list */}
      <ul className="category-title-tags">
        <li>Popular Serirs</li>
        <li>Popular Movies</li>
      </ul>
    </div>
  );
}
