"use strict";

const Sequelize = require("sequelize");
const process = require("process");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/database.json")[env];


const sequelize = new Sequelize(config.database, config.username, config.password, config);

const ipdata = require('./ipdata')(sequelize);
const sessTable = require('./session')(sequelize);


sessTable.hasOne(ipdata);
ipdata.belongsTo(sessTable);

// sequelize.sync({ force: true });
sequelize.sync();

module.exports = { sequelize, ipdata, sessTable};

