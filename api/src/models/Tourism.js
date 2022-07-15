  const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		'tourism',
		{
			ID: {
				primaryKey: true,
				allowNull: false,
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
			},
			Nombre: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			Dificultad: {
				type: DataTypes.ENUM('1', '2', '3', '4', '5'),
				allowNull: false,
			},
			Duracion: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			Temporada: {
				type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
				allowNull: false,
			},
		},
		{ timestamps: false }
	);
};
