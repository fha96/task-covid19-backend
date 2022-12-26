"use strict";

const server = require("./server");
require('dotenv').config();
const { db } = require("./models");


const PORT = process.env.PORT;



db.sync().then(() =>{
    server.start(PORT);
})


