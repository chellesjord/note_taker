//initiate express
const express = require('express');
const PORT = process.env.PORT || 3001;
const htmlRoute = require('./routes/htmlRoutes');
const apiRoute = require('./routes/apiRoutes/noteRoute');
const app = express();


//middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('./public'));
app.use('/api/notes', apiRoute);
app.use('/', htmlRoute);

//API GET Request
app.get('api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "/db/db.json"))
});

//API POST Request


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});

