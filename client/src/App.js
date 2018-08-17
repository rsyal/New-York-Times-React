import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import article from "./components/Article/article";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
    <div>
      <Nav />
      <Switch>
        <Route path="/" component={article} />
        <Route path="/saved" component={Saved} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>

      </div>
    );
  }
}

export default App;
