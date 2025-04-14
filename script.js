document.addEventListener('DOMContentLoaded', function() {
  const amountInput = document.getElementById('amount');
  const fromCurrencySelect = document.getElementById('fromCurrency');
  const toCurrencySelect = document.getElementById('toCurrency');
  const convertForm = document.getElementById('convertForm'); // Updated from 'convertBtn' to 'convertForm'
  const resultDiv = document.getElementById('result');

  // Populate the currency options
  const currencies = ['USD', 'EUR', 'GBP', 'INR', 'AUD', 'CAD']; // Add more currencies as needed

  currencies.forEach(currency => {
    let option1 = document.createElement('option');
    option1.value = currency;
    option1.innerText = currency;
    fromCurrencySelect.appendChild(option1);

    let option2 = document.createElement('option');
    option2.value = currency;
    option2.innerText = currency;
    toCurrencySelect.appendChild(option2);
  });

  // Handle the conversion logic on form submission
  convertForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page

    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    if (!amount || !fromCurrency || !toCurrency) {
      resultDiv.innerText = 'Please fill out all fields.';
      return;
    }

    try {
      // Fetch exchange rate data from the backend API
      const response = await fetch(`/convert?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`);
      const data = await response.json();

      if (data.convertedAmount) {
        const convertedAmount = data.convertedAmount;
        resultDiv.innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
      } else {
        resultDiv.innerText = 'Error fetching conversion rate.';
      }
    } catch (error) {
      resultDiv.innerText = 'Error: Unable to fetch data. Please try again later.';
    }
  });
});
