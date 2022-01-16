import { Contenedor } from "./Contenedor.js";
import express from 'express';

const contenedor = new Contenedor('productos.txt')

const productos = await contenedor.getAll()
const app = express();
const PORT = 8080

function generarAleatorio(numInicial, numFinal) {
    let int = parseInt(Math.random() * numFinal) + numInicial;
    return int;
}

app.get('/', (req, res) => {
    res.send(`<h1>Bienvenido al desafio de la clase 3.</h1>`)
})

app.get('/productos',(req, res) => {
    res.send(productos)
})


app.get('/productoRandom',(req, res) => {
    let numRandom = generarAleatorio(0, 3)
    /* console.log(numRandom) */
    res.send(productos[numRandom])

})

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto: ${server.address().port}`)
});

server.on("error", error => console.log(`Error en servidor ${error}`));
