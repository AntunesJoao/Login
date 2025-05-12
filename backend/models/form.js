const mongoose = require("mongoose")
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema


const cadastreSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

cadastreSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});


const cadastre = mongoose.model("cadastre", cadastreSchema)

module.exports = {cadastre}