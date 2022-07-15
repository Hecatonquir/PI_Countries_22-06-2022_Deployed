import axios from 'axios';

export function getAllCountries(name) {
	return async (dispatch) => {
		return await axios
			.get(`/countries`)
			.then((res) => dispatch({ type: 'GET_ALL', payload: res.data }))
			.catch('HUBO UN ERROR EN A.getCountriesByName');
	};
}

export function getCountriesByName(name) {
	return async (dispatch) => {
		return await axios
			.get(`/countries?name=${name}`)
			.then((res) => dispatch({ type: 'GET_BY_NAME', payload: res.data }))
			.catch('HUBO UN ERROR EN A.getCountriesByName');
	};
}

export function getCountriesByID(id) {
	return async (dispatch) => {
		return await axios
			.get(`/countries/${id}`)
			.then((res) => dispatch({ type: 'GET_BY_ID', payload: res.data }))
			.catch('HUBO UN ERROR EN A.getCountriesByID');
	};
}

export function getAllActivities() {
	return async (dispatch) => {
		return await axios
			.get(`/getactivities`)
			.then((res) => dispatch({ type: 'GET_ALL_ACTIVITIES', payload: res.data }))
			.catch('HUBO UN ERROR EN A.getActivities');
	};
}
export function filterByContinent(payload) {
	return { type: 'Filter_By_Continent', payload };
}
export function filterByActivity(payload) {
	return { type: 'Filter_By_Activity', payload };
}
export function filteredAlphabetycally(payload) {
	return { type: 'Filter_Alphabetically', payload };
}
export function filteredByPopulation(payload) {
	return { type: 'Filter_By_Population', payload };
}

export function createActivity(data) {
	return async (dispatch) => {
		return await axios
			.post(`/activities`, data)
			.then((res) => dispatch({ type: 'Create_Activity', payload: res.data }))
			.catch('HUBO UN ERROR EN A.createActivity');
	};
}
