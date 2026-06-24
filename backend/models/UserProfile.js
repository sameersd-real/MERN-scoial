const mongoose = require('mongoose');

const UserProfileSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        match:[/^[a-zA-Z]+\.\d{2}[a-zA-Z]{3}\d{4}@vitapstudent\.ac\.in$/,"Invalid Email"]
    },
    regdNo:{
        type: String,
        required: true,
        unique: true,
        match:[/^\d{2}[a-zA-Z]{3}\d{4}$/,"Invalid Registration number"]
    },
    username: {
        type: String,
        required: true,
        unique: true,
        match:[/^[a-zA-Z0-9_]+$/,"Invalid Username"]
    },
    password:{
        type: String,
        required:true
    },
    bio: {
        type: String,
        default: ''
    },
    college: {
        type: String,
        default: ''
    },    
    branch: {
        type: String,
        default: ''
    },    
    year: {
        type: String,
        default: ''
    },
    interests: {
        type: [String],
        default: ''
    },    
    careerGoals: {
        type: [String],
        default: []
    },    
    skills: {
        type: [String],
        default: []
    },
    areasOfInterest: {
        type: [String],
        default: []
    },
    currentGoals: {
        type: [String],
        default: []
    },    
    longTermGoal: {
        type: String,
        default: ""
    },    
    createdAt: {
        type: Date,
        default: Date.now
    },    
    profilePhoto: {
        type: String,
        default: 'https://picsum.photos/200'
    }
},{timestamps:true});

module.exports = mongoose.model('UserProfile', UserProfileSchema);