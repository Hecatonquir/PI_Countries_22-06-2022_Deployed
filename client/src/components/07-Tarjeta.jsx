import React from 'react';
import './Styles/07-Tarjeta.css';
import { Link } from 'react-router-dom';

export default function Tarjeta({ id, image, name, continent }) {
	return (
		<div className='Tarjeta'>
			<Link to={`/detail/${id}`}>
				<img className='Tarjeta' src={image} alt='name' width='200px' height='250px' />
			</Link>
			<Link className='Tarjeta' to={`/detail/${id}`}>
				{name}
			</Link>
			<h3> {continent} </h3>
		</div>
	);
}
