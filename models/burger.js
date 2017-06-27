//var orm = require('../config/orm.js');

module.exports = function(sequelize, Datatypes) {
	var Burger = sequelize.define("Burger", {
		burger_name: DataTypes.STRING, 
		devoured: {
			type: DataTypes.BOOLEAN, 
			defaultValue: false
		}
	}, {
		classMethods: {
			associate: function(models) {}
		}
	});
	return Burger;
};