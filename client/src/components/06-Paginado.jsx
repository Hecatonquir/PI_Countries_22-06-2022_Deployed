import React from 'react';
import './Styles/06-Paginado.css';

export default function Paginado(obj) {
	let { countriesPerPage, countriesState, setCurrentPage, currentPage } = obj;

	countriesState = typeof countriesState !== 'string' ? countriesState.length : countriesState;
	const pageNumbers = [];

	let numberOfPages = Math.ceil(countriesState / countriesPerPage);

	if (typeof countriesState === 'string' || countriesState <= 9) {
		pageNumbers.push(1);
	} else if (countriesState + 1 >= numberOfPages * countriesPerPage) {
		for (let i = 1; i <= numberOfPages + 1; i++) {
			pageNumbers.push(i);
		}
	} else {
		for (let i = 1; i <= numberOfPages; i++) {
			pageNumbers.push(i);
		}
	}
	const paginado = (pagenumber) => {
		setCurrentPage(pagenumber);
	};

	return (
		<nav className='paginado'>
			<ul className='paginado'>
				{pageNumbers &&
					pageNumbers.map((num) => {
						return (
							<li className={num === currentPage ? 'active' : 'paginado'} key={num}>
								<button onClick={() => paginado(num)}>{num}</button>
							</li>
						);
					})}
			</ul>
		</nav>
	);
}
