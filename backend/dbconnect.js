const Sequelize = require('sequelize');
const sequelize = new Sequelize('recoffee', 'marioone', '123456', {
    host: "localhost",
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
  console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao conectar: " +erro)
})