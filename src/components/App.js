import React, {Component} from 'react';
import Page from './page';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router basename="/ready-bready">
        <Route exact path="/" component={Page}></Route>
      </Router>
    );
  }
}

export default App;