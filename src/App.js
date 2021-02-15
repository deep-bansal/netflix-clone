import React from "react";
import Landing from "./Components/Landing";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />

          <Route exact path="/main" component={Main} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
