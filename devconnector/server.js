const express = require("express");
const mongoose = require("mongoose");

// Route files 
const users = require("./routes/api/users")
const profiles = require("./routes/api/profiles")
const posts = require("./routes/api/posts")

// declare express
const app = express();

// DB config
const db = require("./config/keys").mongoURI;

// Connect to Mongodb
mongoose
	.connect(db)
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.log("MongoDB connection failed:","\n", err));

// Default
app.get("/", (req, res) => res.send("Hello!"));

// Use Routes
app.use("/api/users", users)
app.use("/api/posts", posts)
app.use("/api/profiles", profiles)

const port = process.env.PORT || 5050;

app.listen(port, () => console.log(`Server running on port ${port}`));
