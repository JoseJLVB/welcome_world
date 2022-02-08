
const express = require('express');
const fs = require('fs').promises;
const app = express();

app.use(express.static('static'));

app.get('/crear',  (req, res) => {
    console.log(req.query);

    fs.writeFile(
    `archivos/${req.query.archivo}`, 
    req.query.contenido, 
    'utf-8'
    );
    res.send('Archivo creado')
});

app.get('/leer', (req, res) => {
    console.log(req.query);
    fs.readFile(`archivos/${req.query.archivo}`, 
    );
    res.send('Archivo leido')
});

