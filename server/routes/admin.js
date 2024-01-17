const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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


// POST / ADMIN REGISTER
router.post('/register', async (req, res) => {

    try {
      const { username, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
  
      try {
        const user = await User.create({ username, password:hashedPassword });
        res.status(201).json({ message: 'User Created', user });
      } catch (error) {
        if(error.code === 11000) {
          res.status(409).json({ message: 'User already in use'});
        }
        res.status(500).json({ message: 'Internal server error'})
      }
  
    } catch (error) {
      console.log(error);
    }
  });
module.exports = router;