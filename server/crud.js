const db = require('./database')

//CREATE
const createNote = (title, note, callback) => {
    const sql = `INSERT INTO notes (title, note) VALUES(?, ?)`
    db.run(sql, [title, note], function(err){
        callback(err, {id: this.lastID})
    })
}

const readNotes = (callback) => {
    const sql = `SELECT * FROM notes`;
    db.all(sql, [], callback)
}

const updateNote = (id, title, note, callback) => {
    const sql = `UPDATE notes SET title = ?, note = ? WHERE id = ?`
    db.run(sql, [title, note, id], callback)
}

const deleteNote = (id, callback) => {
    const sql = `DELETE FROM notes WHERE id = ?`
    db.run(sql, id, callback)
}

module.exports = {createNote, readNotes, updateNote, deleteNote}
