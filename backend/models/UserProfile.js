const mongoose = require('mongoose');

const UserProfileSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    regdNo:{
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
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
    interestsAndGoals: {
        type: String,
        default: ''
    },    
    careerGoals: {
        type: [String],
        default: []
    },    
    skillsBeingLearned: {
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
    longTermGoals: {
        type: [String],
        default: []
    },    
    createdAt: {
        type: Date,
        default: Date.now
    },    
    profilePhoto: {
        type: String,
        default: 'https://picsum.photos/200'
    }
});

module.exports = mongoose.model('UserProfile', UserProfileSchema);