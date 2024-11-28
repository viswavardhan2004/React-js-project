// backend/server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // MongoDB ORM for Node.js
const orderRoutes = require('./routes/orderRoutes'); // Import order routes

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json

// Connect to MongoDB (replace with your own connection string)
mongoose.connect('mongodb://localhost:27017/grocery', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Use order routes for handling orders
app.use('/api/orders', orderRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});