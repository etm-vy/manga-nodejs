const mongoose = require('mongoose');
const url = 'mongodb://[admin:CFVtre91951]node13851-env-8338661.us.reclaim.cloud/mangas';

mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true});
const db = mongoose.connection; 

db.once('open', () => {
    console.log('Connected to Database');
});

db.on('error',(error) => {
    console.error('Connection error: ', error);
});

module.exports = db;