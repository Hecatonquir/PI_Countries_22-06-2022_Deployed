import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as A from "../Redux/actions";
import "./Styles/11-Activity.css";
import ActivityCard from "./13-T.Activity";
import Navbar from "./04-NavBar";

export default function Activities() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(A.getAllCountries());
	}, [dispatch]);
	const AllCountries = useSelector((state) => state.allCountries);

	const countriesWithActivities = AllCountries.filter((c) => c.tourisms.length !== 0);

	return (
		<main className="activity">
			<Navbar />
			<div className="activity">
				<br />
				<br />
				<br />
				{countriesWithActivities.length ? (
					<section className="Tarjetas">
						{countriesWithActivities.map((country) => {
							return country.tourisms.map((to) => {
								return (
									<ActivityCard
										key={to.ID}
										id={to.ID}
										name={to.Nombre}
										temporada={to.Temporada}
										duracion={to.Duracion}
										dificultad={to.Dificultad}
										pais={country.Nombre}
										imagen={country.Imagen}
									/>
								);
							});
						})}
					</section>
				) : (
					<h2 className="actividades">No se encontraron Actividades</h2>
				)}
			</div>
		</main>
	);
}
