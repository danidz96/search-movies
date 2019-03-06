import React, { useState, useEffect } from 'react';

import { ButtonBackToHome } from '../components/ButtonBackToHome';

const API_KEY = '9a5934eb';

export const Detail = (props) => {
	const [ item, setItem ] = useState({});
	const [ loading, setLoading ] = useState(false);

	const fetchMovie = async ({ id }) => {
		setLoading(true);
		try {
			const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
			const data = await response.json();
			setItem(data);
		} catch (error) {
			console.log(error);
		}
		setLoading(false);
	};

	useEffect(() => {
		const { itemId } = props.match.params;
		fetchMovie({ id: itemId });
	}, []);

	return (
		<div>
			<ButtonBackToHome />
			{loading ? (
				<p>Loading...</p>
			) : (
				<div>
					<h1>{item.Title}</h1>
					<img src={item.Poster} alt="poster" />
					<h3>{item.Actors}</h3>
					<span>{item.Metascore}</span>
					<p>{item.Plot}</p>
				</div>
			)}
		</div>
	);
};
