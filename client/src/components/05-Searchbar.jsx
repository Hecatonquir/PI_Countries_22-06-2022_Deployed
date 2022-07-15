import { React, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getCountriesByName } from '../Redux/actions';

export default function SearchBar(todo) {
	const dispatch = useDispatch();
	let { setCurrentPage } = todo;
	let [searchInput, setSearchInput] = useState('');

	const handleChange = (e) => {
		setSearchInput(e.target.value);
	};

	const handleSearch = (e) => {
		e.preventDefault();
		dispatch(getCountriesByName(searchInput));
		setSearchInput('');
		setCurrentPage(1);
	};

	return (
		<>
			<br />
			<input
				type='text'
				onChange={(e) => handleChange(e)}
				placeholder='Buscar un País...(en inglés)'
				value={searchInput}
			/>
			<button type='submit' onClick={(e) => handleSearch(e)}>
				Buscar
			</button>
			<br />
		</>
	);
}
