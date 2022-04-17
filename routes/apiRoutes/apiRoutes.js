const router = require('express').Router();
const { notes } = require('../../db/db.json');
const fs = require('fs');
const path = require('path');

router.get('/notes', (req, res) => {
    res.json(notes);

});

router.post('/notes', (req, res) => {
    const note = req.body;

    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify({ notes }, null, 2)
    );
    return res.json(note);
    
});

module.exports = router;