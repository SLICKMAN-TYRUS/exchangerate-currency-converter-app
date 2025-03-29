# exchangerate-currency-converter-app
Exchangerate Currency Converter App is a web application that converts currencies using real-time exchange rates from the Exchangerate API. It features a simple UI, secure API integration, and robust error handling. The app is deployed on Web01 &amp; Web02 with a load balancer, ensuring reliability and scalability.
# Exchangerate Currency Converter App

## Welcome to the Exchangerate Currency Converter App!

Hello and welcome! I'm excited to walk you through my **Exchangerate Currency Converter App**. This is a simple yet powerful web application designed to help users easily convert currencies using real-time exchange rates.

### What Can You Do with This App?

The Exchangerate Currency Converter App allows you to:

- **Convert currencies in real-time**: You can convert any amount of one currency to another using live exchange rates from [Exchangerate API](https://www.exchangerate-api.com/).
- **Select from multiple currencies**: With support for over 170 currencies, including USD, EUR, GBP, INR, and many others, you can convert between almost any two currencies.
- **Experience a user-friendly interface**: The app has a clean, intuitive design, making it easy for you to enter your values and instantly see the conversion.

---

## How to Get Started

Let's get you set up with the app so you can see how it works!

### 1. Clone the Repository

To start using the app locally, first clone the repository to your machine:

```bash
git clone https://github.com/SLICKMAN-TYRUS/exchangerate-currency-converter-app.git
cd exchangerate-currency-converter-app
2. Install Dependencies
Next, you'll need to install the required dependencies for the app. It's really simple to do with npm:

bash
Copy code
npm install
3. Set Up Your API Key
In order for the app to fetch live exchange rates, you'll need an API key from Exchangerate API.

Once you have your API key, create a .env file in the root directory of the project and add the following:

ini
Copy code
API_KEY=your-exchangerate-api-key
4. Running the App
Now you're ready to run the app! Simply start the server by running:

bash
Copy code
node server.js
The app will be up and running at http://localhost:5000 in your browser.

How to Use the App
Now that the app is running, let's take it for a spin!

Enter an amount: In the first box, input the amount of money you want to convert.

Select a source currency: Choose the currency you want to convert from.

Select a target currency: Choose the currency you want to convert to.

Hit the "Convert" button: Click the button, and the app will show you the converted amount instantly.

Real-time Conversion
The app pulls live exchange rates from the Exchangerate API, so the conversion values you see are always up-to-date.

Deployment
You can also view the live version of this app by visiting the deployed link below. Here, you can try out the app and see how it works in a production environment.

Live Demo

Want to Contribute?
If you like what you see and want to contribute, I'd love for you to get involved!

Here's how you can contribute:

Fork the repository to your own GitHub account.

Clone your fork:

bash
Copy code
git clone https://github.com/SLICKMAN-TYRUS/exchangerate-currency-converter-app.git
Create a branch for your changes:

bash
Copy code
git checkout -b feature/your-feature-name
Make your changes and commit them:

bash
Copy code
git add .
git commit -m "Add new feature"
Push your changes to your fork:

bash
Copy code
git push origin feature/your-feature-name
Open a pull request on GitHub so I can review and merge your changes!

License
This project is licensed under the MIT License, which means you are free to use, modify, and distribute it, but please make sure to include proper credit.

Special Thanks
A huge thank you to:

Exchangerate API for providing accurate, live exchange rate data.

Node.js for being a fantastic platform for building server-side applications.

Express.js for making it easy to build fast and scalable web applications.

Final Thoughts
I hope you enjoy exploring the Exchangerate Currency Converter App! It’s a simple project, but it’s a great way to practice using APIs, building web applications, and handling real-time data. If you have any questions, suggestions, or want to contribute, feel free to reach out!

Thanks for visiting!
