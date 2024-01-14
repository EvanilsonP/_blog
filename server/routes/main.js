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

// GET / POST :ID
router.get('/post:id', async (req, res) => {
    try {
        
        const locals = {
            title: 'Node Js Blog',
            description: 'Simple blog created with'
        }

        let slug = req.params.id;
        const data = await Post.findById({ _id: slug });
        res.render('post', { locals, data });
    } 
    
    catch (error) {
        console.log(error)
    }
});



router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;