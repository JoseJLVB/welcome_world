
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

app.get('/renombrar',  async (req, res) => {
    console.log(req.query);
    await fs.rename(
        `archivos/${req.query.nombre}`,
        `archivos/${req.query.nuevoNombre}`, (error) => {
        if (error) {
            throw error;
        } 
        });
    res.write(
        `Archivo "${req.query.nombre}" renombrado`
    );
    res.end();
});

app.get('/eliminar',  (req, res) => {
    console.log(req.query);
    fs.unlink(`archivos/${req.query.archivo}`);
    res.write(`Archivo "${req.query.archivo}" eliminado`);
    res.end();
});

    app.listen(3000, function () {
    console.log('Servidor andando en el puerto 3000');
});