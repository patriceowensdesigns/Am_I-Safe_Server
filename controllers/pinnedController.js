const express = require('express');
const router = express.Router();
const validateSession = require("../middleware/validate-session");
const Pinned = require('../db').import('../models/pinned');

router.get('/practice', function(req, res) {
    res.send('Hey!! This is a practice route!')
})

router.post("/add", validateSession, (req, res) => {
    const pinnedEntry = {
        userId: req.user.id,
        firstName: req.body.pinned.firstName,
        lastName: req.body.pinned.lastName,
        mugshot: req.body.pinned.mugshot,
        sourceId: req.body.pinned.sourceId,
        note: req.body.pinned.note
    };
    Pinned.create(pinnedEntry)
    .then((pinned) => res.status(200).json(pinned))
    .catch((err) => res.status(500).json({ error: err }));
});

router.get("/mine", validateSession, (req, res) => {
    // let userId = req.user.id;
    Pinned.findAll({
      where: { userId: req.user.id },
    })
      .then((pinned) => res.status(200).json(pinned))
      .catch((err) => res.status(500).json({ error: err }));
  });

router.put("/update/:id", validateSession, function (req, res) {
    const updatePinnedEntry = {
      note: req.body.pinned.note,
    };
  
    const query = { where: { id: req.params.id } };
  
    Pinned.update(updatePinnedEntry, query)
      .then((pinned) => res.status(200).json(pinned))
      .catch((err) => res.status(500).json({ error: err }));
  });

  router.delete('/delete/:id', validateSession, function (req, res) {
      const query = { where: {id: req.params.id, userId: req.user.id}};

      Pinned.destroy(query)
      .then(() => res.status(200).json({ message: "Pin Removed" }))
      .catch((err) => res.status(500).json({ error: err }));
  });

module.exports = router;