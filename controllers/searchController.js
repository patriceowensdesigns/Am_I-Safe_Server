const express = require('express');
const router = express.Router();
const validateSession = require('../middleware/validate-session');
const Search = require('../db').import('../models/search');

router.get('/practice', validateSession, function(req, res) {
    res.send('Hey!! This is a practice route!')
});



router.post('/create', validateSession, (req, res) => {
     const searchEntry = {
         firstName: req.body.search.firstName,
         lastName: req.body.search.lastName,
         mugshot: req.body.search.mugshot,
         sourceId: req.body.search.sourceId
     }

     Search.create(searchEntry)
        .then((search) =>res.status(200).json(search))
        .catch((err) => res.status(500).json({ error: err }));
});

router.put("/update/:id", validateSession, function(req, res) {
    const updateSearchEntry = {
         firstName: req.body.search.firstName,
         lastName: req.body.search.lastName,
         mugshot: req.body.search.mugshot,
         sourceId: req.body.search.sourceId,
    };

    const query = { where: { id: req.params.id } };

    Search.update(updateSearchEntry, query)
    .then((search) => res.status(200).json(search))
    .catch((err) => res.status(500).json({ error: err }));
});

router.delete("/delete/:id", validateSession, function (req, res) {
    const query = {where: {id: req.params.id} };

    Search.destroy(query)
    .then(() => res.status(200).json({ message: "Entry Removed" }))
    .catch((err) => res.status(500).json({ error: err}));
});



module.exports = router;