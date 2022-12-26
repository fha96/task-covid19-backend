"use strict";

const { Sequelize, DataTypes } = require("sequelize");
const record = require('./records.model');


const DATA_BASE_URL = process.env.DATABASE_URL || 'postgres://fahadzidan1@localhost:5432/covid';

let sequelizeOptions = {

    // dialectOptions : {
    //     ssl : {
    //         require : true,
    //         rejectUnauthorized: false
    //     }
    // }

};


const sequelize = new Sequelize(DATA_BASE_URL, sequelizeOptions);


const recordModel = record(sequelize,DataTypes);


module.exports = {
    db:sequelize,
    recordModel
}
