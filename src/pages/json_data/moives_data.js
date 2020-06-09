import React from "react";
import "./movies_series.css";
import { Link } from "react-router-dom";

/*
 * movies_data is a component that keeps the state of objects. componentDidMount() is called first. This method
 * is used to pull the hosted JSON data from url and then set the state of the movie prop. When the page
 * is first rendered there is a null check checking the state of movie. If movie prop is null then a loading "screen"
 * will appear until there is data from the JSON file to be rendered. Once there is JSON data availale, the JSON array
 * is mapped out and only films that are of programType movie are rendered to the movie page.
 *
 * Only the movies cover image is rendered to the page and a Link to the moive is created using the movies title
 * pulled from the JSON file.
 */

export default class movies_data extends React.Component {
  state = {
    loading: true,
    movie: null,
  };
  async componentDidMount() {
    const url =
      "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json";
    const response = await fetch(url);
    const data = await response.json();

    this.setState({ movie: data, loading: false });
    console.log(this.state.movie.entries[0].programType);
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.movie ? (
          <div>Loading...</div>
        ) : (
          <div>
            <div>
              {this.state.movie.entries.map((movieDetail, index) => {
                if (movieDetail.programType == "movie") {
                  return (
                    <Link to={movieDetail.title}>
                      <img
                        className="program-image"
                        src={movieDetail.images["Poster Art"].url}
                        alt={movieDetail.title}
                      />
                    </Link>
                  );
                }
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}
