const express = require('express');
const router = express.Router();
const Source = require('../db').import('../models/source');
// const SrcResult = BaseUrl;

// router.get('/practice', function(req, res) {
    //     res.send('Hey!! This is a practice route!')
    // })
    
    router.get('/', (req, res) => {
        const BaseUrl = "http://www.JailBase.com/api/1/sources"
        const i = BaseUrl;

        Source.findAll({i})
        .then(source=> res.status(200).json(source))
        .catch(err => res.status(500).json({ error: err }))
});
module.exports = router;