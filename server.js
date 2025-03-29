// Import the required modules
const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config(); // Ensure .env is loaded

// Initialize the express app
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for frontend interactions
app.use(express.json()); // Parse JSON bodies

// Route to fetch exchange rates
app.get('/api/exchange-rate', async (req, res) => {
  const baseCurrency = req.query.base || 'USD'; // Default to 'USD' if no base currency is provided
  const targetCurrency = req.query.target || 'EUR'; // Default to 'EUR' if no target currency is provided
  
  try {
    const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`, {
      headers: { Authorization: `Bearer ${process.env.EXCHANGE_API_KEY}` }
    });

    // Check if the target currency exists in the response
    if (!response.data.rates[targetCurrency]) {
      return res.status(404).json({ message: `Target currency ${targetCurrency} not found.` });
    }

    // Return the exchange rate data
    res.json({
      baseCurrency,
      targetCurrency,
      rate: response.data.rates[targetCurrency],
      date: response.data.date,
    });
  } catch (error) {
    // Log the error and send a user-friendly response
    console.error('Error fetching exchange rates:', error.message);
    res.status(500).json({ message: 'Error fetching exchange rates. Please try again later.' });
  }
});

// Route to serve the homepage (if needed)
app.get('/', (req, res) => {
  res.send('Welcome to the Exchangerate Currency Converter API!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
