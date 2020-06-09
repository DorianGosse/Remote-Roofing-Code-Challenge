import React from "react";
import "./movies_series.css";
import { Link } from "react-router-dom";
export default class series_data extends React.Component {
  /*
   * movies_data is a component that keeps the state of objects. componentDidMount() is called first. This method
   * is used to pull the hosted JSON data from url and then set the state of the movie prop. When the page
   * is first rendered there is a null check checking the state of movie. If movie prop is null then a loading "screen"
   * will appear until there is data from the JSON file to be rendered. Once there is JSON data availale, the JSON array
   * is mapped out and only films that are of programType series are rendered to the series page.
   *
   * Only the series cover image is rendered to the page and a Link to the series is created using the series title
   * pulled from the JSON file.
   */
  state = {
    loading: true,
    series: null,
  };
  async componentDidMount() {
    const url =
      "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json";
    const response = await fetch(url);
    const data = await response.json();

    this.setState({ series: data, loading: false });
    console.log(this.state.series.entries[0].programType);
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.series ? (
          <div>Loading...</div>
        ) : (
          <div>
            <div>
              {this.state.series.entries.map((seriesDetail, index) => {
                if (seriesDetail.programType == "series") {
                  return (
                    <Link to={seriesDetail.title}>
                      <img
                        className="program-image"
                        src={seriesDetail.images["Poster Art"].url}
                        alt={seriesDetail.title}
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
