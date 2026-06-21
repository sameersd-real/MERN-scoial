const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const UserProfile = require('./models/UserProfile');
const path = require('path');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

const MONGO_URI = process.env.MONGO_URI
mongoose.connect(MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));


// Create Profile
app.post('/signup', async (req, res) => {
    try {
        const hashPassword = await bcrypt.hash(req.body.password,10);
        const profile = new UserProfile({...req.body,password:hashPassword});
        await profile.save();
        console.log("submit successful");
        res.status(201).json({
            message: 'Profile created successfully',
            profile
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});


app.post("/login", async (req, res) => {
  try {
    const { regdNo , password } = req.body;
    console.log("Login attempt: ", regdNo);
    const user = await UserProfile.findOne({ regdNo });
    console.log("User found", !!user);
    if (!user) {
      return res.status(401).json({
        message: "Invalid registration number or password",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );
    console.log("Password matched: ",isMatch);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid registration number or password",
      });
    }

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        username: user.username,
      },
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});
// // Get All Profiles
// app.get('/user', async (req, res) => {
//     try {
//         const profiles = await UserProfile.find()
//             .sort({ createdAt: -1 });

//         res.json(profiles);

//     } catch (error) {
//         res.status(500).json({
//             error: error.message
//         });
//     }
// });


// // Get Single Profile
// app.get('/user/:id', async (req, res) => {
//     try {
//         const profile = await UserProfile.findById(req.params.id);

//         if (!profile) {
//             return res.status(404).json({
//                 message: 'Profile not found'
//             });
//         }

//         res.json(profile);

//     } catch (error) {
//         res.status(500).json({
//             error: error.message
//         });
//     }
// });


// // Update Profile
// app.put('/user/:id', async (req, res) => {
//     try {
//         const profile = await UserProfile.findByIdAndUpdate(
//             req.params.id,
//             req.body,
//             { new: true }
//         );

//         res.json(profile);

//     } catch (error) {
//         res.status(500).json({
//             error: error.message
//         });
//     }
// });


// // Delete Profile
// app.delete('/user/:id', async (req, res) => {
//     try {
//         await UserProfile.findByIdAndDelete(req.params.id);

//         res.json({
//             message: 'Profile deleted successfully'
//         });

//     } catch (error) {
//         res.status(500).json({
//             error: error.message
//         });
//     }
// });



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});