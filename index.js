// Import the express library
const express = require('express');

// Initialize the express application
const app = express();

// Define the /_health endpoint
app.get('/_health', (req, res) => {
  res.status(200).json({ message: 'OK' });
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

