const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MangaSchema = new Schema({
    name: String,
    status: String,
    chapter: Number,
    genre: String
});

module.exports = mongoose.model('Manga', MangaSchema);