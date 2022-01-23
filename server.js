//initiate express
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();


//middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('./public'));

//API GET Request
app.get('api/notes', (req, res) => {
    fs.readFile(path.join(__dirname, './db/db.json', "utf-8", (err,data) => {
        let noteSwitch = JSON.parse(data)
        if (err) {
            throw err;
        }
        return res.json(noteSwitch)
    }));
});

//API POST Request

//API GET Home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, ".public/index.html"))
});

//API GET notes Web browser
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"))
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});

