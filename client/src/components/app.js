import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Form from './form';

class App extends Component {

  componentDidMount() {
    this.props.loadUser();
  }

  render() {
    return (
      <BrowserRouter>
    <div>
    <Route exact path="/form" component={Form} />
    </div>
    </BrowserRouter>

    );
  }
}

export default connect(null, actions)(App);
