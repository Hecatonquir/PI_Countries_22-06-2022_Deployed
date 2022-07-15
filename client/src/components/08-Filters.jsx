import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	filterByContinent,
	filterByActivity,
	filteredAlphabetycally,
	filteredByPopulation,
} from '../Redux/actions';

export function ByContinent(todo) {
	const dispatch = useDispatch();
	let { setCurrentPage } = todo;
	const Allcountries = useSelector((state) => state.allCountries);

	const continents = [...new Set(Allcountries.map((el) => el.Continente))];

	function handleFilterTypes(e) {
		dispatch(filterByContinent(e.target.value));
		setCurrentPage(1);
	}

	return (
		<div>
			<h4>Ordenar por Continente</h4>
			<select onChange={(e) => handleFilterTypes(e)}>
				<option value='All'> Todos </option>
				{continents.length
					? continents.map((co) => {
							return (
								<option key={co} value={co}>
									{co}
								</option>
							);
					  })
					: 'No se encontraron continentes'}
			</select>
		</div>
	);
}

export function ByActivity(todo) {
	const dispatch = useDispatch();
	let { setCurrentPage } = todo;
	const activitiesState = useSelector((state) => state.Allactivities);

	let activitiesState2;
	if (activitiesState?.length && typeof activitiesState != 'string') {
		activitiesState2 = [...new Set(activitiesState.map((el) => el.Nombre))];
	}

	function handleFilterTypes(e) {
		dispatch(filterByActivity(e.target.value));
		setCurrentPage(1);
	}

	return (
		<div>
			<h4>Ordenar por Actividades</h4>
			<select onChange={(e) => handleFilterTypes(e)}>
				<option value='All'> Todas </option>
				{activitiesState2?.length
					? activitiesState2.map((ac) => {
							return (
								<option key={ac} value={ac}>
									{ac}
								</option>
							);
					  })
					: 'No se encontraron Actividades'}
			</select>
		</div>
	);
}

export function Alphabetically(todo) {
	const dispatch = useDispatch();
	let { setCurrentPage, setOrden } = todo;

	function handleFilterAlphabetically(e) {
		e.preventDefault();
		dispatch(filteredAlphabetycally(e.target.value));
		setCurrentPage(1);
		setOrden(`Ordenado ${e.target.value}`);
	}

	return (
		<div>
			<h4>Ordenar Alfabeticamente</h4>
			<select onChange={(e) => handleFilterAlphabetically(e)}>
				<option value='All'>Sin Orden</option>
				<option value='asc'>Ascendente (A-Z)</option>
				<option value='desc'>Descendente (Z-A)</option>
			</select>
		</div>
	);
}

export function ByPopulation(todo) {
	const dispatch = useDispatch();
	let { setCurrentPage, setOrden } = todo;

	function handleFilterAlphabetically(e) {
		e.preventDefault();
		dispatch(filteredByPopulation(e.target.value));
		setCurrentPage(1);
		setOrden(`Ordenado ${e.target.value}`);
	}

	return (
		<div>
			<h4>Ordenar por Población</h4>
			<select onChange={(e) => handleFilterAlphabetically(e)}>
				<option value='All'>Sin Orden</option>
				<option value='asc'>Ascendente (menor)</option>
				<option value='desc'>Descendente (mayor)</option>
			</select>
		</div>
	);
}
