const mongoose = require("mongoose")

require("dotenv").config()
mongoose.set("strictQuery", true)

async function main() {
    try {
        await mongoose.connect(process.env.URL_BD)
        console.log("Banco de dados conectado")

    } catch (error) {
        console.log(error)
    }
}

main()

module.exports =  main