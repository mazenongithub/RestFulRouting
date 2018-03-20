import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './landing';
import PostsNew from './form'
class App extends Component {



  render() {
    return (
      <BrowserRouter>
    <div>
    <Switch>
    <Route exact path="/posts/new" component={PostsNew} />
    <Route exact path="/" component={Landing} />
    </Switch>
    </div>
    </BrowserRouter>

    );
  }
}

export default App;
