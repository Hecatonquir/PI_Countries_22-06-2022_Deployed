export default function verificador(localInput) {
	let { Pais, Nombre, Dificultad, Duracion, Temporada } = localInput;
	Nombre = Nombre.trim();
	let verif = [];
	verif.check = 'mal';
	let verifSimbol = Nombre.search(/[^\w\s]/g);
	let verifNumber = Nombre.search(/\d/g);

	if (!Nombre) {
		verif.Nombre = 'Insertar Nombre de la Actividad';
	}

	if (verifSimbol >= 0) {
		verif.Nombre = 'Esta palabra contiene símbolos. Por favor utilice únicamente Letras';
	}
	if (verifNumber >= 0) {
		verif.Nombre = 'Esta palabra contiene Numeros. Por favor utilice únicamente Letras';
	} else if (!Dificultad) {
		verif.Dificultad = 'Insertar Dificultad';
	} else if (!Duracion || Duracion < 0 || Duracion > 10080) {
		verif.Duracion = 'Insertá una Duracion que sea mayor a cero y dure menos de 7 días';
	} else if (!Temporada) {
		verif.Temporada = 'Insertá una Temporada';
	} else if (!Pais.length) {
		verif.Pais = 'Insertar Pais de la Actividad';
	}

	if (!verif.Pais && !verif.Nombre && !verif.Dificultad && !verif.Duracion && !verif.Temporada) {
		verif.check = 'bien';
	}

	return verif;
}
