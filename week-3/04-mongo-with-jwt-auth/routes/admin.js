const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config');
const {Admin, Course} = require('../db');
 
// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const admin = new Admin({
        username: username,
        password: password,
    })

    admin.save();
    res.json({
        message: "Admin created successfully"
    })
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = Admin.findOne({
        username: username,
        password: password,
    })
    if (user){
        const token = jwt.sign({
            username
        }, JWT_SECRET);
        res.json({
            message: "Signin successful",
            token
        })
    }

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    
    const newCourse = await Course.create({
        title: title,
        description: description,
        imageLink: imageLink,
        price: price
    })
    console.log(newCourse);
    res.json({
        message: "course created successfully", courseId: newCourse._id
    })

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    });
});

module.exports = router;