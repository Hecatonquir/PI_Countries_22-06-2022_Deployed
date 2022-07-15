const initialState = {
	allCountries: [],
	countries: [],
	Allactivities: [],
	countriesByContinentANDActivity: [],
	activities: [],
	countriesById: [],
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case 'GET_ALL':
			return {
				...state,
				countries: action.payload,
				allCountries: action.payload,
			};
		case 'GET_BY_NAME':
			return {
				...state,
				countries: action.payload,
			};
		case 'GET_BY_ID':
			return {
				...state,
				countriesById: action.payload,
			};

		case 'GET_ALL_ACTIVITIES':
			return {
				...state,
				Allactivities: action.payload,
			};
		case 'Filter_By_Continent':
			const allCountries1 = state.allCountries;
			const filtered =
				action.payload === 'All'
					? allCountries1
					: allCountries1.filter((el) => el.Continente === action.payload);
			return {
				...state,
				countries: filtered,
				countriesByContinentANDActivity: filtered,
			};
		case 'Filter_By_Activity':
			const allCountries2 = state.countriesByContinentANDActivity.length
				? state.countriesByContinentANDActivity
				: state.allCountries;
			const filtered1 =
				action.payload === 'All'
					? allCountries2
					: allCountries2.filter((co) =>
							co.tourisms.map((t) => t.Nombre === action.payload).includes(true)
					  );
			return {
				...state,
				countries: filtered1.length ? filtered1 : 'No se encontraron Países con esas actividades',
			};
		case 'Filter_Alphabetically':
			const allcountries3 = state.countries;
			if (typeof allcountries3 !== 'string') {
				const filtered3 =
					action.payload === 'All'
						? allcountries3
						: action.payload === 'asc'
						? allcountries3.sort((a, b) => a.Nombre.localeCompare(b.Nombre))
						: // O TAMBIEN PUEDO HACER 		(a.Nombre > b.Nombre ? 1 : -1)
						  allcountries3.sort((a, b) => b.Nombre.localeCompare(a.Nombre));
				return {
					...state,
					countries: filtered3,
				};
			} else
				return {
					...state,
					countries: allcountries3,
				};
		case 'Filter_By_Population':
			const allcountries4 = state.countries;
			if (typeof allcountries4 !== 'string') {
				const filtered4 =
					action.payload === 'All'
						? allcountries4
						: action.payload === 'asc'
						? allcountries4.sort((a, b) => (a.Poblacion > b.Poblacion ? 1 : -1))
						: allcountries4.sort((a, b) => (a.Poblacion > b.Poblacion ? -1 : 1));
				return {
					...state,
					countries: filtered4,
				};
			} else
				return {
					...state,
					countries: allcountries4,
				};
		case 'Filter_By_TAMANIO':
			const allcountries5 = state.countries;
			if (typeof allcountries5 !== 'string') {
				const filtered5 =
					action.payload === 'All'
						? allcountries5
						: action.payload === '5'
						? allcountries5.filter((pais) => pais.Poblacion > 500000)
						: allcountries5.filter((pais) => pais.Poblacion > 10000000000);

				return {
					...state,
					countries: filtered5.length ? filtered5 : 'No hay paises con esa poblacion',
				};
			} else
				return {
					...state,
					countries: 'No se encontraron paises con esa cantiadd de personas',
				};

		case 'Create_Activity':
			return { ...state, Allactivities: action.payload, activities: action.payload };

		default:
			return { ...state };
	}
}

export default reducer;
