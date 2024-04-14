const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const passport = require("passport");


// Route files 
const users = require("./routes/api/users")
const profiles = require("./routes/api/profiles")
const posts = require("./routes/api/posts")

// declare express
const app = express();

// Body parser middleware 
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// DB config
const db = require("./config/keys").mongoURI;

// Connect to Mongodb
mongoose
	.connect(db)
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.log("MongoDB connection failed:","\n", err));

// Passport Middleware
app.use(passport.initialize())

// Passport config 
require("./config//passport")(passport)

// Use Routes
app.use("/api/users", users)
app.use("/api/posts", posts)
app.use("/api/profiles", profiles)

const port = process.env.PORT || 5050;

app.listen(port, () => console.log(`Server running on port ${port}`));
