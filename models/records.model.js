'use strict';

module.exports = (sequelize, DataTypes) => sequelize.define('record',{
    country: {
        type:DataTypes.STRING,
        allowNull:false
    },
    date:{
        type: DataTypes.STRING,
        allowNull: false
    }
});