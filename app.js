const express = require("express");

let usuarios = [
    {nome: "Thales",
    sobrenome: "Gomes"
    }
];

const app = express();

app.get('/inicio',(request, response) =>{
    return response.send('Olá mundo!');
})

app.get('/usuarios', (request, response) =>{
    return response.json(usuarios);
})

app.listen(3000,()=>{
    console.log('Servidor rodando!');
})