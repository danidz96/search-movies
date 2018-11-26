import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import 'bulma/css/bulma.css'

import { MoviesList } from './components/MoviesList';
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { NotFound } from './pages/NotFound'

class App extends Component {
  state = {
    results: [],
    usedSearch: false
  }

  _handleResults = (results) => {
    this.setState({ results, usedSearch: true })
  }

  _renderResults = () => this.state.results.length === 0 ? <p>No results found...</p> : <MoviesList movies={this.state.results} />

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/detail/:itemId' component={Detail} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
