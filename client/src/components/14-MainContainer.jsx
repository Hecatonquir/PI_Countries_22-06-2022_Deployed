import React from 'react';
import Tarjeta from './07-Tarjeta';
import './Styles/03-Home.css';

export default function MainContainer(Props) {
	const { countriesState, currentcountries } = Props;

	return countriesState?.length ? (
		typeof countriesState != 'string' ? (
			<section className='Tarjetas'>
				{currentcountries.map((e) => {
					return (
						<Tarjeta
							key={e.ID}
							id={e.ID}
							image={e.Imagen}
							name={e.Nombre}
							continent={e.Continente}							
						/>
					);
				})}
			</section>
		) : (
			<h2 className='notFound'>{countriesState}</h2>
		)
	) : (
		<div className='loading'>
			<img
				className='loading'
				src='https://cdn.dribbble.com/users/1731126/screenshots/4339345/hipster-pilot-v2.gif'
				alt='Uups...'
			/>
			<h2 className='loading'> Loading...</h2>
		</div>
	);
}

