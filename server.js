// Import required modules
const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

// Initialize Express
const app = express();
const PORT = process.env.PORT || 5000;

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
    if (isNaN(amount) || amount <= 0) {
        return res.status(400).json({ error: 'Amount must be a positive number' });
    }

    try {
        // Fetch conversion rate from Exchangerate API
        const response = await axios.get(`https://v6.exchangerate-api.com/v6/${process.env.EXCHANGE_API_KEY}/latest/${from}`);
        const rates = response.data.conversion_rates;

        // Ensure the rate exists
        if (!rates[to]) {
            return res.status(400).json({ error: `Conversion rate not available for ${to}` });
        }

        // Calculate the converted amount
        const convertedAmount = (rates[to] * amount).toFixed(2);

        res.json({ convertedAmount });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching data from the API' });
    }
});

// Start the server
app.listen(process.env.PORT || 5000, '0.0.0.0', () => {
    console.log('Server running on port 5000');
});
