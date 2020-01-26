import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/base/Navbar";
import About from "./components/pages/About";
import Entries from "./components/pages/Entries";

import EntryState from "./context/entries/entryState";
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
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </EntryState>
  );
}

export default App;
