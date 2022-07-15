const { UUID } = require('sequelize');
const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		'country',
		{
			ID: {
				type: DataTypes.STRING,
				allowNull: false,
				primaryKey: true,
			},
			Nombre: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			Continente: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			Subregion: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			Capital: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			Area: {
				type: DataTypes.FLOAT,
				allowNull: true,
			},
			Poblacion: {
				type: DataTypes.INTEGER,
				allowNull: true,
			},
			Imagen: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{ timestamps: false }
	);
};
