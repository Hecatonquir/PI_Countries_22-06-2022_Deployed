import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createActivity } from "../Redux/actions";
import verificador from "./12-Verificador.jsx";
import "./Styles/10-Create.css";
import * as A from "../Redux/actions";
import Navbar from "./04-NavBar";

export default function Create() {
	const dispatch = useDispatch();
	/* const History = useHistory(); */
	useEffect(() => {
		dispatch(A.getAllCountries());
	}, [dispatch]);
	const countriesState = useSelector((state) => state.countries);
	const Paises = countriesState.map((c) => c.Nombre);
	const [verif, setVerif] = useState({});
	const Temporadas = ["Verano", "Otoño", "Invierno", "Primavera"];
	const Dificultades = ["1", "2", "3", "4", "5"];
	let [localInput, setLocalInput] = useState({
		Nombre: "",
		Dificultad: "",
		Duracion: "",
		Temporada: "",
		Pais: [],
	});

	let handleSubmit = async (e) => {
		e.preventDefault();
		if (verif.check === "bien") {
			dispatch(createActivity(localInput));
			setLocalInput({
				Nombre: "",
				Dificultad: "",
				Duracion: "",
				Temporada: "",
				Pais: [],
			});
			alert("Actividad Creada!");
		} else {
			alert("Tiene que insertar los datos correctamente!");
		}
	};

	let handleInputChange = (e) => {
		setLocalInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
		setVerif(
			verificador({
				...localInput,
				[e.target.name]: e.target.value /* Si borro esta línea el verificador tiene un retraso */,
			})
		);
	};

	let handleCheckBox = (e) => {
		if (localInput[e.target.name] !== e.target.value) {
			setLocalInput({
				...localInput,
				[e.target.name]: e.target.value,
			});
			setVerif(
				verificador({
					...localInput,
					[e.target.name]: e.target.value,
				})
			);
		} else {
			setLocalInput((prev) => ({ ...prev, [e.target.name]: "" })); // ESTA ES PTRA FPR;A DE SETEARLO
			setVerif(
				verificador({
					...localInput,
					[e.target.name]: "",
				})
			);
		}
	};
	let handleSelect = (e) => {
		if (e.target.value !== "0") {
			if (!localInput.Pais.includes(e.target.value)) {
				setLocalInput({
					...localInput,
					Pais: [...localInput.Pais, e.target.value],
				});
				setVerif(
					verificador({
						...localInput,
						Pais: [...localInput.Pais, e.target.value],
					})
				);
			} else {
				setLocalInput({
					...localInput,
					Pais: localInput.Pais.filter((d) => d !== e.target.value),
				});
				setVerif(
					verificador({
						...localInput,
						Pais: localInput.Pais.filter((d) => d !== e.target.value),
					})
				);
			}
		}
	};

	return (
		<main className="mainCrear">
			<Navbar />
			<div className="Crear">
				<br />
				<h1 className="Crear"> ¡Crea Una Actividad! </h1>
				<form className="Crear" onSubmit={(e) => handleSubmit(e)}>
					<div className="labels">
						<label>&nbsp;Nombre: </label>
						<input
							type="text"
							name="Nombre" /* este nombre tiene que ser igual al del local state que queremos cambiar */
							value={localInput.Nombre}
							onChange={(e) => handleInputChange(e)}
						/>
						{verif?.Nombre ? <p className="verif">{verif.Nombre}</p> : null}
					</div>
					<div className="labels">
						<label>&nbsp;Dificultad: </label>
						<ul className="checkbox">
							{Dificultades.map((d) => {
								return (
									<li className="checkbox" key={d}>
										{d}
										<input type="radio" name="Dificultad" value={d} onChange={(e) => handleCheckBox(e)} />
									</li>
								);
							})}
						</ul>
						{verif?.Dificultad ? <p className="verif">{verif.Dificultad}</p> : null}
					</div>
					<h4>{localInput.Dificultad ? "Dificultad: " + localInput.Dificultad : ""}</h4>
					<div className="labels">
						<label>&nbsp;Duración (minutos): </label>
						<input type="number" name="Duracion" value={localInput.Duracion} onChange={(e) => handleInputChange(e)} />
						{verif?.Duracion ? <p className="verif">{verif.Duracion}</p> : null}
					</div>
					<div className="labels">
						<label>&nbsp;Temporada: </label>
						<ul className="checkbox">
							{Temporadas.map((d) => {
								return (
									<li className="checkbox" key={d}>
										{d}
										<input type="radio" name="Temporada" value={d} onChange={(e) => handleCheckBox(e)} />
									</li>
								);
							})}
						</ul>
						{verif?.Temporada ? <p className="verif">{verif.Temporada}</p> : null}
					</div>
					<h4>{localInput.Temporada ? "Temporada: " + localInput.Temporada : ""}</h4>
					<div className="labels">
						<label>&nbsp;País: </label>
						<select onChange={(e) => handleSelect(e)}>
							<option value={0}> País: </option>
							{Paises.map((p) => {
								return (
									<option key={p} value={p}>
										{p}
									</option>
								);
							})}
						</select>
						<ul className="paisSelection">
							<li>{localInput.Pais.length ? localInput.Pais.map((e) => `${e}, `) : ""}</li>
						</ul>
						{verif?.Pais ? <p className="verif">{verif.Pais}</p> : null}
					</div>
					<button type="submit" disabled={Object.keys(verif).length ? (verif.check === "bien" ? false : true) : true}>
						CREAR
					</button>
				</form>
			</div>
		</main>
	);
}
