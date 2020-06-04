const express = require('express');
const router = express.Router();

// Item Model

const Static = require('../../models/Static');

// @route GET api/items
// @desc GET All Visualizations
// @access Public
router.get('/', (req, res) => {
    Static.find()
        .then(items => res.json(items))
});

router.get('/:name', (req, res) => {
    Static.find({ name: req.params.name })
        .then(items => {
            // items = JSON.parse(items);
            // console.log(items)
            // items = JSON.stringify(items.contents);
            res.json(items);
        
        }) //make it just send an array of stuff
});

// @route POST api/items
// @desc Create a visualization
// @access Public
router.post('/', (req, res) => {
    const newStatic = new Static({
        name: req.body.name,
        contents: req.body.contents
        //contents: req.body.contents
        //other fields will go here
    });
    newStatic.save().then(static => res.json(static));
});

// @route DELETE api/items/:id
// @desc Delete a Post
// @access Public
// router.delete('/:id', (req, res) => {
//     Item.findById(req.params.id)
//         .then(item => item.remove().then(() => res.json({ sucesss: true })))
//         .catch(err => res.status(404).json({ success: false }));
// });


module.exports = router;