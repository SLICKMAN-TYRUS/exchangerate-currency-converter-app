// Import required modules
const express = require('express');
const axios = require('axios');  // Ensure correct require syntax
const cors = require('cors');
require('dotenv').config();

// Initialize Express
const app = express();
const PORT = process.env.PORT || 5000;  // You can set your preferred port here

// Middleware to allow cross-origin requests
app.use(cors());

// Serve static files (e.g., HTML, CSS, JS) from the public directory
app.use(express.static('public'));

// Endpoint for currency conversion
app.get('/convert', async (req, res) => {
    const { amount, from, to } = req.query;

    // Validate input
    if (!amount || !from || !to) {
        return res.status(400).json({ error: 'Missing required parameters' });
    }

    try {
        // Fetch conversion rate from Exchangerate API
        const response = await axios.get(`https://v6.exchangerate-api.com/v6/${process.env.EXCHANGE_API_KEY}/latest/${from}`);
        const rates = response.data.conversion_rates;

        // Calculate the converted amount
        const convertedAmount = (rates[to] * amount).toFixed(2);

        // Respond with the converted amount
        res.json({ convertedAmount });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching data from the API' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
