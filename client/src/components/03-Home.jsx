import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Styles/03-Home.css";
import * as A from "../Redux/actions";
import * as Filter from "./08-Filters";
import SearchBar from "./05-Searchbar";
import Paginado from "./06-Paginado";
import MainContainer from "./14-MainContainer";
import Navbar from "./04-NavBar";

export default function Home() {
	const dispatch = useDispatch();
	let countriesState = useSelector((state) => state.countries);
	countriesState?.length ? (
		typeof countriesState != "string" ? (
			countriesState.map((c) => {
				let a = c;
				a.Nombre = c.Nombre.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
				return a;
			})
		) : (
			<h2 className="notFound">{countriesState}</h2>
		)
	) : (
		<div className="loading">
			<img
				className="loading"
				src="https://cdn.dribbble.com/users/1731126/screenshots/4339345/hipster-pilot-v2.gif"
				alt="Uups..."
			/>
			<h2 className="loading"> Loading...</h2>
		</div>
	);

	// __________________________ Paginado _________________________________
	const [currentPage, setCurrentPage] = useState(1);
	let countriesPerPage = 10;
	// eslint-disable-next-line no-unused-vars
	const [orden, setOrden] = useState("");
	const indexOfLastCountry = currentPage * countriesPerPage;
	const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
	let currentcountries;
	if (currentPage === 1) {
		currentcountries = countriesState?.length
			? countriesState.slice(indexOfFirstCountry, indexOfLastCountry - 1)
			: "No hay countries";
	} else
		currentcountries = countriesState?.length
			? countriesState.slice(indexOfFirstCountry - 1, indexOfLastCountry - 1)
			: "No hay countries";
	// __________________________ Fin Paginado _____________________________
	useEffect(() => {
		dispatch(A.getAllCountries());
		dispatch(A.getAllActivities());
	}, [dispatch]);

	return (
		<main className="home">
			<Navbar />
			<SearchBar setCurrentPage={setCurrentPage} />
			<br />
			<div className="filtros">
				<Filter.ByContinent setCurrentPage={setCurrentPage} />
				<Filter.ByActivity setCurrentPage={setCurrentPage} />
				<Filter.Alphabetically setCurrentPage={setCurrentPage} setOrden={setOrden} />
				<Filter.ByPopulation setCurrentPage={setCurrentPage} setOrden={setOrden} />
			</div>
			<br />
			<br />
			<br />
			<Paginado
				countriesPerPage={countriesPerPage}
				countriesState={countriesState}
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
			/>
			<br />
			<MainContainer countriesState={countriesState} currentcountries={currentcountries} />
			<br />
			<Paginado
				countriesPerPage={countriesPerPage}
				countriesState={countriesState}
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
			/>
			<br />
		</main>
	);
}
