const express = require('express')
const {createNote, readNotes, updateNote, deleteNote} = require('./crud')
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.json())

app.use(
    cors({
        origin: "*",
      })
)

const PORT = process.env.PORT || 3000;

app.get('/notes', (req, res) => {
    readNotes((err, rows) => {
        if(err){
            res.status(500).send(err.message)
        }else{
            res.status(200).json(rows)
        }
    })
})

app.post('/notes', (req, res) => {
    const {title, note} = req.body;
    createNote(title, note, (err, data) => {
        if(err){
            res.status(500).send(err.message)
        }else{
            res.status(201).send(`Note successfully added with id: ${data.id}`)
        }
    })
})

app.put('/notes/:id', (req, res) => {
    const {title, note} = req.body
    updateNote(req.params.id, title, note, (err) => {
        if(err){
            res.status(500).send(err.message)
        }else{
            res.status(200).send("Note updated successfully")
        }
    })
})

app.delete('/notes/:id', (req,res) => {
    const id = req.params.id
    deleteNote(id, (err) => {
        if(err){
            res.status(500).send(err.message)
        }else{
            res.status(200).send(`Note with id ${id} deleted successfully`)
        }
    })
})

app.listen(PORT, () =>{
    console.log(`Server running at http://localhost:${PORT}`);
})