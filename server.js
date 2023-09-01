// buscando a raíz do projeto o .env
require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_STRING,
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }
);

const db = mongoose.connection;
db.on('error', (err) => console.log(err));
db.once('open', () => console.log('Database connected!'));

// Carregar/Aceitar o padrão json, pois vamos uilizar uma REST APi
app.use(express.json());


app.listen(3000, () => console.log('Server running'));