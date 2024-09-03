//criando um servidor express
const express = require("express")
const server = express()
server.listen(8080, function () {
    console.log("Servidor rodando")
})

//importando o middleware que verifica o token
const verificaToken = require("./middleware/verificaToken")
//testando o middleware
server.get("/acessar/conta/usuario", verificaToken, function (req, res) {
    // Se verificaToken chamar next(), esta função será executada.
    return res.status(200).send({
        message: "Sucesso, o token é válido."
    })
})