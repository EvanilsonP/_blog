const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// GET / ADMIN LOG PAGE
router.get('/admin', (req, res) => {
    try {
        const locals = {
            title: 'Admin',
            description: 'Simple blog'
        };

        res.render('admin', { locals, data });
    } 

    catch (error) {
        console.log(error);
    }
});

module.exports = router;