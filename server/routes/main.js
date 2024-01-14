const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// GET / HOME
// ROUTES
// router.get('', async (req, res) => {
//     try {
//       const locals = {
//         title: "NodeJs Blog",
//         description: "Simple Blog created with NodeJs, Express & MongoDb."
//       }

//       // Pagination
//       let perPage = 8;
//       let page = req.query.page || 5;
  
//       const data = await Post.aggregate([ { $sort: { createdAt: -1 } } ])
//       .skip(perPage * page - perPage)
//       .limit(perPage)
//       .exec();
  
//       const count = await Post.countDocuments({});
//       const nextPage = parseInt(page) + 1;
//       const hasNextPage = nextPage <= Math.ceil(count / perPage);
  
//       res.render('index', { 
//         locals,
//         data,
//         current: page,
//         nextPage: hasNextPage ? nextPage : null,
//       });
  
//     } catch (error) {
//       console.log(error);
//     }
  
//   });
  
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

// POST / Post - search term
router.post('/search', async (req, res) => {
  try {

    const locals = {
      title: 'Search',
      description: "Simple Blog created with NodeJs, Express & MongoDb.",
    }

    let searchTerm = req.body.searchTerm; // Grabbing search term from the form over search.ejs
    const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9 ]/g, "") // Removing special caracheteres

    const data = await Post.find({
      $or: [
        { title: { $regex: new RegExp(searchNoSpecialChar, 'i') }},
        { body: { $regex: new RegExp(searchNoSpecialChar, 'i') }}
      ]
    });

    res.render('search', { 
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