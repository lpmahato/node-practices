require('dotenv').config();
const http = require('http');
const path = require('path');
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const connectDB = require('./config/database');

// Database connection
connectDB();

// Initialize app and port
const app = express();
const port = process.env.PORT || 3000;

// Setup cors and body parser
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static file
app.use('/static', express.static(path.join(__dirname, 'public')));

app.use('/api', routes);

// Create server and listen
const server = http.createServer(app);
server.listen(port, () => console.log(`Server listening on port: ${port}`));
