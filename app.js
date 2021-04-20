const { request } = require("express");
const express = require("express");
const app = express();

app.use(express.json());

let usuarios = [
    {nome: "Thales",
    sobrenome: "Gomes"
    }
];

app.get('/inicio',(request, response) =>{
    return response.send('Olá mundo!');
})

app.get('/usuarios', (request, response) =>{

    return response.json(usuarios);
})

app.post('/usuarios', (request, response) =>{

   const {nome, sobrenome} = request.body;

   usuarios.push({nome, sobrenome});

   return response.json({nome, sobrenome})
})

app.put('/usuarios/:nome', (request, response) =>{
    const { nome } = request.params;
    
})


app.listen(3000,()=>{
    console.log('Servidor rodando!');
})