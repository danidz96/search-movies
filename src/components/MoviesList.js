import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card } from './Card'

export class MoviesList extends Component {
  static propTypes = {
    movies: PropTypes.array
  }

  render() {
    const { movies } = this.props
    return(
      <div className="MoviesList">
        {
          movies.map(item => {
            return (
              <div className="MoviesList-item" key={item.imdbID}>
                <Card 
                  id={item.imdbID}
                  title={item.Title}
                  year={item.Year}
                  poster={item.Poster}
                />
              </div>
            )
          }) 
        }
      </div>
    )
  }
}
