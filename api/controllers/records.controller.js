'use strict';

const { recordModel } = require("../../models");




const readAll = async(req, res, next) => {
    try {
        const records = await recordModel.findAll();
        res.status(200).send(records);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const deleteOneRecord = async(req, res, next) => {
    const {id} = req.params;
    try {
        await recordModel.destroy({where: {id}});
        res.status(200).send('Record has been deleted successfully!');
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const createRecord = async(req, res, next) => {
    const  record  = req.body;
    try {
        await recordModel.create(record);
        res.status(200).send('Record has been added successfully!');
    } catch (error) {
        res.status(500).send('Server Error!');
    }
}


module.exports = {
    readAll,
    deleteOneRecord,
    createRecord
}