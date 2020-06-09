import React from "react";

import Home from "./pages/Home";
import Series from "./pages/Series";
import Movies from "./pages/Movies";
import Error from "./pages/Error";
import "./app.css";

import { Route, Switch, BrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/series/" component={Series} />
        <Route exact path="/movies/" component={Movies} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
