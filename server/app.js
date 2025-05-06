const express = require('express');
const mongoose = require('mongoose');
const playerPropRoutes = require('./routes/playerPropRoutes');

const app = express();

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/sportsbetting', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use player prop routes
app.use('/api', playerPropRoutes);

// Server listening
app.listen(5000, () => {
  console.log('Backend server is running on port 5000');
});