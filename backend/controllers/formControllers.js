const { cadastre} = require("../models/form")
const bcrypt = require('bcrypt');


// Para criar o cadastro do usuario
const createCadastre = async(req, res) =>{
    try {
        const {name, email, password} = req.body

        if(!name || !email || !password){
            return res.status(400).json({msg: "Por favor, preencher todos os campos"})
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newCadastre = new cadastre({
            name,
            email,
            password: hashedPassword
        })
        
        await newCadastre.save()
        
        res.json({msg: "Conta criada com sucesso", newCadastre})

    } catch (error) {
        console.log(error.message)
        res.status(500).send("Ocorreu um erro!!!")
        
    }
}


// Código para pegar os dados do user e fazer a validação
const autenticarLogin = async(req, res) =>{
    try {
        const {email, password} = req.body

        if(!email || !password){
            return res.status(400).json ({msg: "Por favor, preencher todos os campos"})
        }
        
        //procurar usuário por email
        const user = await cadastre.findOne({email})

        if(!user){
            return res.status(404).json({msg: "Usuário não encontrado"})
        }
            console.log("Senha armazenada:", user.password);

        // Comparar a senha informada com a senha criptografada no banco
        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            
            return res.status(401).json({ msg: "Senha incorreta." });
        
        }

        res.json({ msg: "Login bem-sucedido." });

    } catch (error) {
        res.status(500).send("Ocorreu um erro na hora de pegar o login!!!")

    }
} 

module.exports ={
    createCadastre,
    autenticarLogin
}