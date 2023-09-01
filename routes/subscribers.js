const express = require('express');
const router = express.Router();
const Subscriber = require('../models/subscriber');
const subscriber = require('../models/subscriber');

router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find();
        res.json(subscribers);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.get('/:id', getSubscriber, (req, res) => {

});

router.post('/', async (req, res) => {
    const subscriber = new Subscriber({
        userName: req.body.userName,
        userChannel: req.body.userChannel,
    });

    try {
        const newSubscriber = await subscriber.save();
        res.status(201).json(newSubscriber);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

router.patch('/:id', getSubscriber, (req, res) => {

});

router.delete('/:id', getSubscriber, (req, res) => {

});

// middleware para verificar se o id existe no banco de dados
async function getSubscriber(req, res, next) {
    try {
        const subscriber = await Subscriber.findById(req.params.id);
        
        if(!subscriber) {
            return res.status(404).json({message: 'Subscriber not found.'});
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

    res.subscriber = subscriber;
}

// é necesário exportar para que seja acessado a partir do nosso
// server.js
module.exports = router;