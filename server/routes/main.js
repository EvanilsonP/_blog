const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// GET / HOME
// ROUTES
router.get('/', async (req, res) => {
    const locals = {
        title: 'Node Js Blog',
        description: 'Simple blog created with'
    }
    // Gonna display the database content in the website
    try {
        const data = await Post.find();
        res.render('index', { locals, data });
    } 
    
    catch (error) {
        console.log(error)
    }
});


router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;