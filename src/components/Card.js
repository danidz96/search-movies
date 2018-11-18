import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Card extends Component {
  static propTypes = {
    title: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string
  }

  render() {
    const { poster, title, year } = this.props;
    return (
      <div clasName="card">
        <div clasName="card-image">
          <figure clasName="image">
            <img src={poster} alt={title} />
          </figure>
        </div>
        <div clasName="card-content">
          <div clasName="media">
            <div clasName="media-left">
            </div>
            <div clasName="media-content">
              <p clasName="title is-4">{title}</p>
              <p clasName="subtitle is-6">{year}</p>
            </div>
          </div>
        </div>
    </div>
    )
  }
}
