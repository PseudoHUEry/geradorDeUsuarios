const mongoose = require('mongoose'),
{ Schema } = mongoose,

CpfSchema = new Schema({
    cpf: {
        type: Number,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('CPF', CpfSchema)