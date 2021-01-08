import React, { useState } from 'react';

const API_KEY = '9a5934eb';

export const SearchForm = (props) => {
	const [ inputText, setInputText ] = useState('');

	const handleChange = (e) => {
		setInputText(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		props.isLoading(true);
		try {
			const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${inputText}`);
			const data = await response.json();
			const { Search = [] } = data;
			props.onResults(Search);
		} catch (error) {
			console.log(error);
		}
		props.isLoading(false);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="field has-addons">
				<div className="control">
					<input className="input" onChange={handleChange} type="text" placeholder="Movie to search..." />
				</div>
				<div className="control">
					<button className="button is-info">Search</button>
				</div>
			</div>
		</form>
	);
};
