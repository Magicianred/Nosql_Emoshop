const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Criando a tabela de Mensagens

const Mensagens = new Schema({
    Name:{
        type:String,
        required:true,
    },
    Email :{
        type:String,
        required:true,
    },
    Message:{
        type:String,
        required:true,
    }
}) 

mongoose.model ("mensagens", Mensagens);
