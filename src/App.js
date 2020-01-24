import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/base/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

import EntryState from "./context/entries/entryState";
import "./App.scss";

function App() {
  return (
    <EntryState>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </Fragment>
      </Router>
    </EntryState>
  );
}

export default App;
