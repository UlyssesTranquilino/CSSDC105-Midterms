import express from "express"; // Import Express framework
import bodyParser from "body-parser"; // Import body-parser to handle JSON data in requests

import productRoutes from "./routes/product.js"; // Import product routes

const app = express(); // Create an instance of the Express app
const PORT = 5000; // Define the port the server will run on

// MIDDLEWARE
// Use body-parser middleware to parse incoming JSON requests
app.use(bodyParser.json());

// ROUTES
// Route for handling product-related endpoints
app.use("/products", productRoutes);

// Root route to test if the server is running
app.get("/", (req, res) => res.send("Welcome to the Product API"));

// Catch-all route for undefined endpoints
app.all("*", (req, res) =>
  res.send("You've tried reaching a route that doesn't exist.")
);

// SERVER STARTUP
// Start the server and listen on the specified port
app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
