const express = require('express');
const connectDB = require('./config/db');
const templateRoutes = require('./routes/templates');

const app = express();

// Connect to MongoDB
connectDB();

// Define Routes
app.use('/api/templates', templateRoutes);

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello, MailCraft Backend!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
