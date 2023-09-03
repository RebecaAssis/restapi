const mongoose = require('mongoose');

// criando a estrutura que vai para o banco de dados
const subscriberSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    userChannel: {
        type: String,
        required: true
    },
    userDate: {
        type: Date,
        required: true,
        default: Date.now
    }
});

// exportando o model mongoose.model(name, schema)
module.exports = mongoose.model('Subscriber', subscriberSchema)