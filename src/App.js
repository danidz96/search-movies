import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import { Title } from './components/Title'
import SearchForm from './components/SearchForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title>Search Movies</Title>
        <SearchForm />
      </div>
    );
  }
}

export default App;
