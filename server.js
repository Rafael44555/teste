const express = require('express')
//importei a dependencia express

const app = express()
//agora que importei a dependencia, vou criar uma variavel chamada app e utilizar a função express()

let port = 3000

app.listen(port,() => {
    console.log('Servidor rodando na porta ' + port)
})
//criando localhost:3000

app.get('/', (req, res) => {
    res.send("Minha primeira rota")

})
//criando primeira rota

app.get('/teste', (req,res) => {
    res.send('Meu primeiro teste')
})
//criando meu primeiro teste
