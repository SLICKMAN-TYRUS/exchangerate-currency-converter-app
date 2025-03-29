document.getElementById('convertForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    try {
        // Make the API request to the backend
        const response = await fetch(`http://localhost:3000/convert?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch conversion data');
        }

        const data = await response.json();
        
        // Display the result
        document.getElementById('result').textContent = `${amount} ${fromCurrency} is equal to ${data.convertedAmount} ${toCurrency}`;
    } catch (error) {
        console.error('Error:', error);
    }
});
