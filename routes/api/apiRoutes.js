const fs = require('fs');
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
let noteInput = require('../../db/db.json');

//route to get all notes
router.get('/notes', (req, res) => {

    let newEntry = JSON.parse(fs.readFileSync('./db/db.json'));
    noteInput = newEntry;
    res.json(noteInput);
});

router.post('/api/notes', (req, res) => {
    let newInput =
    {
        id: uuidv4(),
        title: req.body.title,
        text: req.body.text
    };

    input.push(newInput);

    fs.writeFileSync("./db/db.json",
        JSON.stringify(entry), function (err) {
            if (err) throw err;
        })
    res.json(entry);
})