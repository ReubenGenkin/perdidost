const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));
app.use(express.json);




app.get('/notes', (req, res) => {

res.sendFile(path.join(__dirname, '../public/notes.html'))

})

app.get('*', (req, res) => {

    res.sendFile(path.join(__dirname, '../public/index.html'))
    
    })

app.get('/notes', (req, res) => {

res.sendFile(path.join(__dirname, '../public/notes.html'))

})




app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})