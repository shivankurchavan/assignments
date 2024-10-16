const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User , Course} = require("../db");
const { default: mongoose } = require("mongoose");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) {
        return res.status(400).json({
            message: "Username and password required"
        });
    }

    User.create({
        username: username,
        password: password
    })

    res.json({
        message: "User created successfully"
    })
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});
    
    res.json({
        courses: response
    })
});

router.get('/', (req, res) => {
    // Implement listing all courses logic
    console.log('Hello World');
    res.send('Hello World');
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const id = req.params.courseId;
    const username = req.headers.username;
    
    await User.updateOne({ 
        username: username
    },{
        "$push": {
            purchasedCourses: id
        }
    })    
    res.json({
        message: "Course purchased successfully"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;

    const user = await User.findOne({
        username: username
    })

    const courses = await Course.find({
        _id:{
            "$in": user.purchasedCourses
        }
    })

    res.json({
        courses: courses
    })
});

module.exports = router