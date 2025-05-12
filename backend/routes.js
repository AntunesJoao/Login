const express = require("express")
const router = express.Router()

const {createCadastre, autenticarLogin} = require("./controllers/formControllers")

router.post("/", (req, res) => createCadastre(req, res))

router.post("/login", (req, res) => autenticarLogin(req, res))

module.exports = router