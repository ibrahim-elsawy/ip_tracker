"use strict";
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	return sequelize.define("Session", {
		// Model attributes are defined here
		sid: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		expires: {
			type: DataTypes.DATE,
		},
		data: {
			type: DataTypes.TEXT,
		},
	},
	);
};
