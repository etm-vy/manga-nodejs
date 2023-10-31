const express = require('express');
let manga = require('../models/manga');
const router = express.Router();
MangaSchema = require('../models/manga');

function HandleError(response, reason, message, code){
    console.log('ERROR: ', reason);
    response.status(code || 500).json({"error": message});
}

router.get('/', (request, response) => {
    MangaSchema.find().then((mangas) => {
        response.send(mangas);
    }).catch((error) => {
        HandleError(response, "error retrieving data", "get failed", 500);
    });
});

router.post('/',(request, response) => {
    const mangaJSON = request.body;
    if (!mangaJSON.name || !mangaJSON.genre){
        HandleError(response, "missing information", "post data missing", 500);
    } else{
        manga = new MangaSchema({
            name: MangaJSON.manga,
            status: MangaJSON.status,
            chapter: MangaJSON.chapter,
            genre: MangaJSON.genre
        });
        manga.save().then((MangaSchema) => {
            response.send({"id": manga.id});
        }).catch((error) => {
            response.send({"error": error});
        });
    }
});

module.exports = router;