const mongoose = require("mongoose");

function conexao(){
    mongoose.connect("mongodb://localhost/projeto_mcr",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }).then(()=>{
          console.log("Connected successfully ")
      }).catch((erro)=>{
          console.log(`An unexpected error ocurred: ${erro}`);
      })
}

module.exports=conexao()
