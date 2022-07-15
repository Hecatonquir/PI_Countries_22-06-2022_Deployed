import React from 'react';
import { NavLink } from 'react-router-dom';
import './Styles/04-NavBar.css';

export default function Navbar() {
	return (
		<nav>
			<ul className='navBar'>
				<li className='navBar'>
					<NavLink to='/home'> Home </NavLink>
				</li>
				<li className='navBar'>
					<NavLink to='/createActivity'> Crear Actividad </NavLink>
				</li>
				<li className='navBar'>
					<NavLink to='/activity'> Actividades Creadas </NavLink>
				</li>
			</ul>
		</nav>
	);
}
