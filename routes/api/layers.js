const express = require('express');
const router = express.Router();

// Layer Model

const Layer = require('../../models/Layer');

// @route GET api/items
// @desc GET All Visualizations
// @access Public
router.get('/', (req, res) => {
    Layer.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
});

// @route POST api/items
// @desc Create a visualization
// @access Public
router.post('/', (req, res) => {
    const newLayer = new Layer({
        name: req.body.name
        //other fields will go here
    });
    newLayer.save().then(item => res.json(item));
});

// @route DELETE api/items/:id
// @desc Delete a Post
// @access Public
router.delete('/:id', (req, res) => {
    Layer.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ sucesss: true })))
        .catch(err => res.status(404).json({ success: false }));
});


module.exports = router;