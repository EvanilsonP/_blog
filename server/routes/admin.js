const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


const AdminLayout = '../views/layouts/admin';

// GET / ADMIN LOG PAGE
router.get('/admin', (req, res) => {
    try {
        const locals = {
            title: 'Admin',
            description: 'Simple blog'
        };

        res.render('admin/index', { locals, layout: AdminLayout });
    } 

    catch (error) {
        console.log(error);
    }
});

module.exports = router;