// Create web server 

// Import modules
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// Handle HTTP GET request to the /comments endpoint
router.get('/', (req, res) => {
    res.json(comments); 
});