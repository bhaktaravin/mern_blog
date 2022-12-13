const router = require('express').Router(); 

let Post = require('../models/posts'); 


router.route('/').get((req, res) => {
    Post.find() 
    .then((posts) => res.json(posts)) 
    .catch((error) => res.status(404).json("Error: " + error));
});

router.route('/add').post((req, res) => {
    const { title, body, author} = req.body; 
    const date = Date.parse(req.body.date); 

    const comments = []; 

    const newPost = new Post({
        title, 
        body, 
        author, 
        date, 
        comments
    });

    newPost 
    .save() 
    .then(() => res.json("Post has been added....")) 
    .catch((err) => res.status(400).json("Error: " + err)); 
    
});


router.route("/singlePost/:id").get((req, res) => {
    Post.findById(req.params.id) 
    .then((post) => res.json(post)) 
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
    Post.findById(req.params.id)
    .then((post) => {
        post.title = req.body.title; 
        post.body = req.body.body;
        post.author = req.body.author;
        post.date = Date.parse(req.body.date);
        post.comments = req.body.comments;

        post.save() 
        .then(() => res.json("Post edited")) 
        .catch((err) => res.status(400).json("Error: " + err));
    })

    .catch((err) => res.status(400).json("error: " + err));
});



router.route('/delete/:id').delete((req, res) => {
    Post.findByIdAndDelete(req.params.id) 
    .then(() => res.json("Post deleted")) 
    .catch((err) => res.status(400).json("Error: " + err));
})



module.exports = router; 
