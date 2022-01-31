const express = require('express');
const dt = require('./myfirstmodule');

// Constantes
const PORT=8081;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
    res.send("The date and time are currently: " + dt.myDateTime());
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
