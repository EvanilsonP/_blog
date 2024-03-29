const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
  
// GET / HOME
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
        console.log(error);
    }
});

// GET / POST:ID
router.get('/post/:id', async (req, res) => {
  try {
    let slug = req.params.id;
    const data = await Post.findById({ _id: slug });

    const locals = {
      title: data.title,
      description: "Simple Blog created with NodeJs, Express & MongoDb.",
    }

    res.render('post', { 
      locals,
      data,
    });
  } 
  
  catch (error) {
    console.log(error); 
  }

});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;