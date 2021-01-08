import React from 'react';
import { Card } from './Card';

export const MoviesList = (props) => {
	return (
		<div className="MoviesList">
			{props.movies.map((item) => {
				return (
					<div className="MoviesList-item" key={item.imdbID}>
						<Card id={item.imdbID} title={item.Title} year={item.Year} poster={item.Poster} />
					</div>
				);
			})}
		</div>
	);
};
