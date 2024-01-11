const express = require('express');
const router = express.Router();

// ROUTES
router.get('/', (req, res) => {
    const locals = {
        title: 'Node Js Blog',
        description: 'Simple blog created with'
    }
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;