const express = require('express');
const router = express.Router();
MangaSchema = require('../models/manga');

function HandleError(response, reason, message, code){
    console.log('ERROR: ', reason);
    response.status(code || 500).json({"error": message});
}

router.get('/', (request, response) => {
    const mangaJSON = request.body;
    if (!mangaJSON.name || !mangaJSON.chapter){
        HandleError(response, "missing information", "post data missing", 500);
    }else {
        manga = new MangaSchema({
            name: mangaJSON.name,
            status: mangaJSON.status,
            chapter: mangaJSON.chapter,
            genre: mangaJSON.genre
        }
        );
        manga.save()
    }
})