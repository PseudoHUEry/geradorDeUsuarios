const axios = require('axios'),
methodBd = require('../data/database')
require('dotenv').config({ path: '../.env' })
const methodDates = {
    getCpf: ()=>{
        axios({
            method: 'GET',
            url: 'https://gerador.app/api/cpf/generate',
            headers: {
                "Accept": 'application/json',
                "Authorization": `Bearer ${process.env.APP_GERADOR}`
            }
        }).then(x => methodBd.createCPF(x.data))
    }
}
for(i =0; i < 100; i++){
    methodDates.getCpf()
}

module.exports = methodDates