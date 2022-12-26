'use strict';


const express = require('express');
const cors = require('cors');
const recordRouter = require('./api/routes/records.routes');
const { notFound } = require('./error-handler/404');
const app = express();
app.use(express.json());
app.use(cors());
app.use(recordRouter);

console.log('sssssssssssssssssss');
app.get('/',(req, res) => {
    res.send('Server up')
})



app.use(notFound);


function start(port) {
    app.listen(port,() => {
        console.log(`Server is listening on PORT: ${port}`);
    });
}


module.exports = {
    start
}