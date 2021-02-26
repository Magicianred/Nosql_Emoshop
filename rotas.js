const express = require('express');
const routes = express.Router();
const mongoose = require("mongoose");
require("./src/db/conexao");//Minha conexão com bd

//model
require("./src/models/Mensagens");
const Mensagens = mongoose.model("mensagens");

// produtos
routes.get('/', async (req,res) =>  {
    const Mostrar = await Mensagens.find();
    const Mostrarjson = await Mostrar;
    res.json(Mostrarjson)
})

 

routes.post('/mensagens', (req,res) => {
    const sendMessage = new Mensagens ({
        name:req.body.name,
        email:req.body.email,
        message:req.body.message
        
    })
    sendMessage.save();
    res.json({
        message:"Message sent sucessfully",
        produto:sendMessage
    })
})

module.exports = routes;
