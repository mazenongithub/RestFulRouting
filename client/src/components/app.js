import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Master from './master'


class App extends Component {

  render() {
    return (
      <BrowserRouter>
    <div>
    <Switch>
    <Route exact path="/" component={Master} />
    </Switch>
    </div>
    </BrowserRouter>

    );
  }
}

export default App;
