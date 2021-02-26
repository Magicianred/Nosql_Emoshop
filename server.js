const express = require('express');
const app=express();
const cors=require('cors'); 
const routes = require('./rotas');

//config
app.use(express.json());
app.use(cors());
//rotas
app.use(routes);
//port
app.listen(4444);
