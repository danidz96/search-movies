import React, { useState } from 'react';

import { Title } from '../components/Title';
import { SearchForm } from '../components/SearchForm';
import { MoviesList } from '../components/MoviesList';

export const Home = (props) => {
	const [ usedSearch, setUsedSearch ] = useState(false);
	const [ results, setResults ] = useState([]);
	const [ loading, setLoading ] = useState(false);

	const handleResults = (results) => {
		setResults(results);
		setUsedSearch(true);
	};

	const renderResults = () => {
		return results.length === 0 ? (
			<p>
				Sorry!
				<span role="img" aria-label="sad">
					😞
				</span>
				Results not found!
			</p>
		) : (
			<MoviesList movies={results} />
		);
	};

	const handleLoading = (status) => {
		setLoading(status);
	};

	return (
		<div>
			<Title>Movies Hooked</Title>
			<div className="SearchForm-wrapper">
				<SearchForm isLoading={handleLoading} onResults={handleResults} />
			</div>
			{usedSearch ? (
				renderResults()
			) : loading ? (
				<p>Loading...</p>
			) : (
				<small>
					Use the form to search a movie or tv show{' '}
					<span role="img" aria-label="lens">
						🔍
					</span>
				</small>
			)}
		</div>
	);
};
