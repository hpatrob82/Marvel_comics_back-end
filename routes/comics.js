'use strict';

const express = require('express'),
    router = express.Router(),
    comicsModel = require('../models/comicsModel');


router.get('/', async(req, res) => {
    const comicsData = await comicsModel.getAll();
    res.json(comicsData).status(200);
});

router.get('/:name', async(req, res) => {
    const { name } = req.params;
    const comicName = await comicsModel.getByName(name);
    if (comicName) {
        res.json(comicName).status(200);
    } else {
        res.status(400);

    };

});

router.post('/', async(req, res) => {
    const { comicBook_name, comicBook_published, comicBook_writer } = req.body;
    const response = await comicsModel.addEntry(comicBook_name, comicBook_published, comicBook_writer);
    console.log(response);
    if (response.rowCount >= 1) {
        res.redirect('/comics')
    } else {
        res.sendStatus(500);
    }
});

router.post('/delete', async(req, res) => {
    const { comicBook_name } = req.body;
    const comics = new comicsModel(comics_id);
    const response = await comics.deleteEntry();
    console.log(response);
    if (response.rowCount >= 1) {
        res.redirect('/comics')
    } else {
        res.sendStatus(500);
    }
})




module.exports = router;