const sqlite3 = require('sqlite3').verbose()
const dbName = 'myDatabase.db'

const db = new sqlite3.Database(dbName, (err) => {
    if(err){
        console.error(err.message);
    }else{
        console.log("Connected to the Database");
        db.run('CREATE TABLE IF NOT EXISTS notes(id INTEGER PRIMARY KEY AUTOINCREMENT,title TEXT, note TEXT)', (err) => {
            if(err){
                console.error(err.message);
            }else{
                console.log("Table created successfully!!!");
            }
        })
    }
})

module.exports = db;
