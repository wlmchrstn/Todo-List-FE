import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import bg from './main-bg.jpg';
import TodoPage from './components/TodoPage';

class App extends Component {
  render() {
    return (
      <div style={bgStyle}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/todos" exact component={TodoPage} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
const bgStyle = {
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  position: "relative",
  height: "100vh"
}

export default App;
