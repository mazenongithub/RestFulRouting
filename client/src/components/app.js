import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Landing from './landing';
import PostsNew from './form'
import ShowUser from './showuser';
import Master from './master'


class App extends Component {

  render() {
    return (
      <BrowserRouter>
    <div>
    <Switch>
    <Route exact path="/reactrouter/:id/show" component={ShowUser} />
    <Route exact path="/reactrouter/restfulrouting" component={PostsNew} />
    <Route exact path="/reactrouter/allusers" component={Master} />
    <Route exact path="/" component={Landing} />
    </Switch>
    </div>
    </BrowserRouter>

    );
  }
}

export default connect(null, actions)(App);
