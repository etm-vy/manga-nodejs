const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const db = require('./database');

const MangasRouter = require('./routes/mangas');

app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/mangas', MangasRouter);

app.listen(8001, () => {
    console.log('Listening on 8001');
});