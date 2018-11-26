import React, { Component } from 'react'

const API_KEY = "9a5934eb"

export class SearchForm extends Component {
  state = {
    inputText: ''
  }

  _handleChange = (e) => {
    this.setState({
      inputText: e.target.value
    })
  }

  _handleSubmit = (e) => {
    e.preventDefault()
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${this.state.inputText}`)
    .then(res => res.json())
    .then(data => {
      const { Search = [], totalResults } = data;
      console.log(Search, totalResults);
      this.props.onResults(Search)
    })
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input 
              className="input"
              onChange={this._handleChange} 
              type="text" 
              placeholder="Movie to search..." />
          </div>
          <div className="control">
            <button className="button is-info">Search</button>
          </div>
        </div>
      </form>
    )
  }
}
