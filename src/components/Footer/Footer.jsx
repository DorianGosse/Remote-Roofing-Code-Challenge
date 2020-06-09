import React, { Component } from "react";

import "./Footer.css";

/*
 *  Created and renders the Footer of the application used in every page via App.js. This can be thought
 *  of as a global component as it shows no matter the page. (This should be changed as to not show during the streaming
 *  of a movie or TV series).
 *
 *  Renders a component containing HTML ul for the footer link using { Link } to navigate between pages using text
 *  links as well as images as links in the case of the social ul
 */

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div>
          <ul className="footer-list">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/terms-and-conditions">Terms and Conditions</a>
            </li>
            <li>
              <a href="/Collection-statement">Collection Statement</a>
            </li>
            <li>
              <a href="/help">Help</a>
            </li>
            <li>
              <a href="/account-management">Manage Account</a>
            </li>
          </ul>
        </div>

        <div className="copyright">
          Copyright &copy; 2016 DEMO Streaming. All Rights Reserved.
        </div>

        <ul className="store-socials-list">
          <div className="socials">
            <li>
              <a href="/facebook-page">
                <img
                  src={require("../../assets/facebookLogo.png")}
                  alt="Facebook Logo"
                />
              </a>
            </li>
            <li>
              {" "}
              <a href="/twitter-page">
                <img
                  src={require("../../assets/twitter-logo.png")}
                  alt="Twitter Logo"
                />
              </a>
            </li>
            <li>
              {" "}
              <a href="/Instagram-page">
                <img
                  src={require("../../assets/insta-logo.png")}
                  alt="Instagram Logo"
                />
              </a>
            </li>
          </div>

          <div className="app-stores">
            <li>
              {" "}
              <a href="apple-app-store">
                <img
                  src={require("../../assets/apple-store.png")}
                  alt="Apple App Store"
                />
              </a>
            </li>
            <li>
              {" "}
              <a href="/Google-play-store">
                <img
                  src={require("../../assets/googleplay-store.png")}
                  alt="Google Play Store"
                />
              </a>
            </li>
            <li>
              {" "}
              <a href="/Microsoft-store">
                <img
                  src={require("../../assets/microsoft-store.png")}
                  alt="Microsoft Store"
                />
              </a>
            </li>
          </div>
        </ul>
      </footer>
    );
  }
}
