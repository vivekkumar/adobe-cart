import React from "react";
import Header from "./ui/components/Header";
import Home from "./ui/screens/Home/";
import Cart from "./ui/screens/Cart/";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Header />

        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
