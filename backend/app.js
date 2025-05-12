const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())// requisições em dominios diferentes
app.use(express.json())// interpretar req.body (saber ler json)
app.use(express.static("public"))//achar a pasta public


require("dotenv").config()
require("./db/conn")

//rotas
const cadastroRoutes = require("./routes")
app.use("/api/cadastrar",cadastroRoutes)


const port = process.env.PORT

app.listen(port, async() =>{
    console.log(`Servidor rodando na porta ${port}`)
})


