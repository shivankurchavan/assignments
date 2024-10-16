const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://shiv:87654321@cluster0.q2tvn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

mongoose.connection.on('connected', () => {
    console.log('Connected to the database');
  });
  
mongoose.connection.on('error', (err) => {
    console.error('Error connecting to the database', err);
});

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        default: []
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    price: Number,
    imageLink: String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}