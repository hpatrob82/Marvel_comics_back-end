'use strict';

const express = require('express'),
    router = express.Router();


router.get('/', (req, res) => {
    res.json("Welcome to my Marvel Comics API").status(200);
})

module.exports = router;