import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import Matches from "./Matches";
import MatchScreen from "./MatchScreen";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/match/:course">
              <Header backButton="/match"/>
              <MatchScreen />
          </Route>

          <Route path="/match">
            <Header backButton="/"/>
            <Matches />
          </Route>

          {/* default route */}
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>

        {/* Tinder Card */}
        {/* Buttons below cards*/}

        {/* Chats screen */}
        {/* Individual chat screen */}
      </Router>
    </div>
  );
}

export default App;
