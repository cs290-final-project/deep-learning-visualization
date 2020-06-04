const express = require('express');
const router = express.Router();
const textSearch = require('mongoose-partial-full-search');

// Network Model

const Network = require('../../models/Network');

// @route GET api/items
// @desc GET All Visualizations
// @access Public
router.get('/', (req, res) => {
    Network.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
});

//basic name search: searches by name of network
router.get('/:searchquery', (req, res) => {
    Network.search(req.params.searchquery)
        .then(items => res.json(items))
    });
//return items matching query

// @route POST api/items
// @desc Create a visualization
// @access Public
router.post('/', (req, res) => {
    const newNetwork = new Network({
        name: req.body.name,
        description: req.body.description,
        author: req.body.author,
        layers: req.body.layers
        //other fields will go here
    });
    newNetwork.save().then(item => res.json(item));
});

// @route DELETE api/items/:id
// @desc Delete a Post
// @access Public
router.delete('/:id', (req, res) => {
    Network.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ sucesss: true })))
        .catch(err => res.status(404).json({ success: false }));
});


module.exports = router;