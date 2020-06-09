import React, { Component } from "react";
// import { AiOutlineBars } from "react-icons/ai";
import "./NavBar.css";

/*
 * Creates a nav bar that, like footer.jsx is a global variable. I started implementing a dynamic style navigation
 * bar that would expand or collapse depending on the screen size or type of device used.
 *
 *  This navbar includes links to the home page, log in page, start free trial pages. However only the home page is
 *  currently a valid page. Anything else will be directed to error page
 */

export default class NavBar extends Component {
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <div className="navbar">
        <nav className="navbar_navigation">
          <div></div>
          <div className="navbar_logo">
            <a href="/">DEMO Streaming</a>
          </div>
          <div className="spacer" />
          {/* <button type="button" className="nav-btn" onClick={this.handleToggle}>
            <AiOutlineBars classname="nav-icon" />
          </button> */}
          <div className="navbar_nav-items">
            <ul>
              <li>
                <a href="/log-in">Log in</a>
              </li>
              <li>
                <a href="/sign-up" className="free-trial">
                  Start your free trial
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="navbar_bottom_half">
          <a href="/popular-titles">Popular Titles</a>
        </div>
      </div>
    );
  }
}
