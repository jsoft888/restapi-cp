const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3010;

// Connect to MongoDB
mongoose.connect("mongodb+srv://lemuel:lemuel@cluster0.xi3jgc4.mongodb.net/mern?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
// Check MongoDB connection
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Middleware
app.use(express.json());

// Routes
app.get('/users', (req, res) => {
  // Implement logic to fetch all users from the database using mongoose
});

app.post('/users', (req, res) => {
  // Implement logic to add a new user to the database using mongoose
});

app.put('/users/:id', (req, res) => {
  // Implement logic to edit a user by ID using mongoose
});

app.delete('/users/:id', (req, res) => {
  // Implement logic to remove a user by ID using mongoose
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
