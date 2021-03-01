import React, { Component } from "react";
import { BrowserRouter,  Switch, Route} from "react-router-dom";
import Home from "./Home";
import Post from "./Post";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:post_id" component={Post} />
        </Switch>
      </div>
    </BrowserRouter>
    );
  }
}
export default App;