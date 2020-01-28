import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import BasicComponent from "./components/routers/BasicComponent";
import Navbar from "./components/base/Navbar";

import Entries from "./components/pages/Entries";
import EntryState from "./context/entries/entryState";

import About from "./components/pages/About";
import FaqState from "./context/about/faqState";

import "./App.scss";

function App() {
  return (
    <EntryState>
      <Router>
        <Fragment>
          <Navbar />
          <div className="site-container">
            <Switch>
              <Route exact path="/" component={Entries} />
              <BasicComponent
                exact
                path="/about"
                component={About}
                context={FaqState}
              />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </EntryState>
  );
}

export default App;
