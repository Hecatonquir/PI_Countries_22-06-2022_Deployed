import React from 'react';
import './Styles/13-T.Activity.css';

export default function ActivityCard({ imagen, pais, name, temporada, duracion, dificultad }) {
	return (
		<div className='ActivityCard'>
			<h2> {name} </h2>
			<h3> {pais} </h3>
			<img className='ActivityCard' src={imagen} alt='bandera' />
			<h3> Temporada: {temporada} </h3>
			<h3> Duración: {duracion} minutos </h3>
			<h3> Dificultad: {dificultad} </h3>
		</div>
	);
}
