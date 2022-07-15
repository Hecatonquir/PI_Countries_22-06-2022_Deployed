import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as A from '../Redux/actions';
import './Styles/09-Detail.css';
import { Link } from 'react-router-dom';

export default function Detail(props) {
	const { id } = props.match.params;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(A.getCountriesByID(id));
	}, [dispatch, id]);

	let foundCountry = useSelector((state) => state.countriesById);
	foundCountry = foundCountry.length
		? foundCountry.map((c) => {
				let a = c;
				a.Nombre = c.Nombre.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
				return a;
		  })
		: 0;
	let { Area, Capital, Continente, Imagen, ID, Nombre, Poblacion, Subregion, tourisms } =
		foundCountry[0] ? foundCountry[0] : 'null';
	return (
		<main className='detail'>
			<br />
			<div className='div1'>
				<img className='detail' src={Imagen} alt='bandera' />
				<div className='div2'>
					<h3>&nbsp;Nombre: {Nombre ? Nombre : 'No se encontró su Nombre'}.</h3>
					<h3>&nbsp;Código: {ID}.</h3>
					<h3>&nbsp;Continente: {Continente ? Continente : 'No se encontró su Continente'}.</h3>
					<h3>&nbsp;Subregion: {Subregion ? Subregion : 'No se encontró su Subregion'}.</h3>
					<h3>&nbsp;Capital: {Capital ? Capital : 'No se encontró su Capital'}.</h3>
					<h3>&nbsp;Area: {Area?.toLocaleString('en-US')} km².</h3>
					<h3>
						&nbsp;Poblacion:{' '}
						{Poblacion ? Poblacion.toLocaleString('en-US') : 'No se encontró su Poblacion'}{' '}
						personas.
					</h3>
					<h3>
						&nbsp;Actividades:{' '}
						{tourisms?.length
							? tourisms.map((e) => {
									return (
										<div className='act' key={e.ID}>
											<h4>&nbsp;&nbsp;&nbsp;{e.Nombre}</h4>
											<h4>&nbsp;&nbsp;&nbsp;Temporada: {e.Temporada}</h4>
											<h4>&nbsp;&nbsp;&nbsp;Duracion: {e.Duracion} minutos</h4>
											<h4>&nbsp;&nbsp;&nbsp;Dificultad: {e.Dificultad}</h4>
											<h4>&nbsp;&nbsp;&nbsp;__________________</h4>
										</div>
									);
							  })
							: 'No se encontraron actividades.'}
					</h3>
				</div>
			</div>
			<Link to='/home'>
				<h3 className='volver'>Volver</h3>
			</Link>
		</main>
	);
}
