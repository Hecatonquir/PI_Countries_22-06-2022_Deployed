const axios = require('axios');
const { Country, Tourism } = require('./db.js');

// ESTO RETORNA UNA Promise { <pending> }

const loadAllCountries = async (req, res) => {
	try {
		const info = await axios('http://restcountries.com/v3/all');
		const countries = info.data.map((c) => {
			const nombre = c.name.common
				.normalize('NFKD')
				.replace(/[\u0300-\u036f]/g, '')
				.toLowerCase();
			return {
				ID: c.cca3,
				Nombre: nombre,
				Imagen: c.flags[0],
				Continente: c.continents[0],
				Capital: c.capital ? c.capital[0] : 'No posee Capital',
				Subregion: c.subregion ? c.subregion : 'No posee subregion',
				Area: c.area,
				Poblacion: c.population,
			};
		});
		countries.map((c) => {
			Country.findOrCreate({
				where: c,
			});
		});
		const allcountries = await Country.findAll();
		return allcountries;
	} catch (error) {
		console.log('🔴🔵🟢 / file: functions.js / line 29 / error:\n', error);
		return 'Hubo un error en loadAllCountries';
	}
};

const getCountriesById = async (req, res) => {
	const { id } = req.params;
	const ID = id.toUpperCase();
	try {
		const pais = await Country.findAll({
			where: { ID },
			include: {
				model: Tourism,
			},
		});
		res.send(pais);
	} catch (error) {
		console.log('🔴🔵🟢 / file: functions.js / line 50 / error', error);
		res.status(400).send('No se encontraron paises que coincidan con ese ID');
	}
};
const getCountriesByName = async (name) => {
	name = name.toLowerCase();
	try {
		const info = await axios(`https://restcountries.com/v3/name/${name}`);
		const apiMatches = info.data.map((c) =>
			c.name.common
				.normalize('NFKD')
				.replace(/[\u0300-\u036f]/g, '')
				.toLowerCase()
		);
		const myMatches = apiMatches.filter((m) => m.includes(name));
		const MatchesConActivity = await Country.findAll({
			where: { Nombre: myMatches },
			include: {
				model: Tourism,
			},
		});
		return MatchesConActivity;
	} catch (error) {
		console.error('🔴🔵🟢 / file: functions.js / line 73 / error', error);
		return 'No se encontraron coincidencias';
	}
};
const getCountries = async (req, res) => {
	const { name } = req.query;
	let Found;
	try {
		if (name) {
			Found = await getCountriesByName(name);
		} else {
			Found = await Country.findAll({
				include: {
					model: Tourism,
				},
			});
		}
		res.send(Found);
	} catch (error) {
		console.log('🔴🔵🟢 / file: functions.js / line 92 / error:\n', error);
		res.status(400).send('Hubo un error en getCountries');
	}
};
const createActivity = async (req, res) => {
	let { Pais, Nombre, Dificultad, Duracion, Temporada } = req.body;
	try {
		const Activity = await Tourism.create({ Nombre, Dificultad, Duracion, Temporada });
		let pais = await Country.findAll({
			where: { Nombre: Pais },
		});
		Activity.addCountry(pais);
		res.send('Actividad creada correctamente');
	} catch (error) {
		console.log('🔴🔵🟢  file: functions.js  line 97  error:\n', error);
		res.status(400).send('Hubo un error en createActivity');
	}
};
const getActivity = async (req, res) => {
	try {
		const activities = await Tourism.findAll({
			include: {
				model: Country,
				attributes: ['Nombre'],
			},
		});
		res.send(activities);
	} catch (error) {
		console.log('🔴🔵🟢 / file: functions.js / line 120 / error:\n', error);
		res.status(400).send('Hubo un error en getActivity');
	}
};

module.exports = {
	loadAllCountries,
	getCountries,
	createActivity,
	getActivity,
	getCountriesById,
};
