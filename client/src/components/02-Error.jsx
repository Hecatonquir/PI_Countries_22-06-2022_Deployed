import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/02-Error.css';

export default function Error() {
	return (
		<main className='error'>
			<br />
			<h1> Oh No! Ha ocurrido un Problema... </h1>
			<div>
				<h3>Volver a:</h3>
				<Link to={'/home'}>
					<button>
						<h3>Home</h3>
					</button>
				</Link>
			</div>
		</main>
	);
}
