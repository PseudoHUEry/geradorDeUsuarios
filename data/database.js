require('dotenv').config({ path: '../.env' })
const mongoose = require('mongoose'),
Cpf = require('./Models/CPFSchema'),
Person = require('./Models/PersonSchema'),
methodBd = {
    createCPF: (obj) => {
        let {number} = obj,
        cpf = number
        Cpf.create({cpf}).then(x => console.log('Valor inserido.'))
    },
    createPerson: (obj) => {
        Person.create(obj)
    }
}
mongoose.connect(process.env.DB_TOKEN).then(x => console.log('Banco People - Conectado.'))
module.exports = methodBd

