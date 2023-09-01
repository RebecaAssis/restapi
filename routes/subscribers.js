const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('REST API ok!');
});

router.get('/:id', (req, res) => {

});

router.post('/', (req, res) => {

});

router.patch('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});


// é necesário exportar para que seja acessado a partir do nosso
// server.js
module.exports = router;