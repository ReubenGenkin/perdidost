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

//get note by ID
router.get('/notes/:id', (req, res) => {

//Find note by id
    const savedNote = findById(req.params.id, noteSpot);

// if else to test specific note and errer if none found
    if (savedNote) {

        res.json(savedNote);
    } else {
        res.send(404);
    }
});

// post request to add new notes
router.post('/api/notes', (req, res) => {
    let newNote =
    {
        id: uuidv4(),
        title: req.body.title,
        text: req.body.text
    };

// add new note to the DB
    noteInput.push(newNote);

    fs.writeFileSync('./db/db.json',
        JSON.stringify(entry), function (err) {
            if (err) throw err;
        })

//response
    res.json(noteInput);
})

router.delete('/notes/:id', (req, res) => {

// get note to delete by ID
    const delNote = req.params.id;

    let entry = JSON.parse(fs.readFileSync('./db/db.json'));

// filter out deleted note
    newbase = entry.filter(filterNote => {
        return filterNote.id != delNote;
    });

    fs.writeFileSync('./db/db.json', JSON.stringify(newArray));

    //sending back new data base after updating it
    res.json(newArray);

});

//export
module.exports = router;