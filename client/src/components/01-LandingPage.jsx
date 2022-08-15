import React from "react";
import { Link } from "react-router-dom";
import "./Styles/01-LandingPage.css";

export default function LandingPage() {
	return (
		<main className="landing">
			<br />
			<br />
			<br />
			<br />
			<h1 className="landing"> Bienvenido a mi Api de Countries! </h1>
			<Link to={"/home"}>
				<button>
					<h3>Ingresar</h3>
				</button>
			</Link>
		</main>
	);
}
