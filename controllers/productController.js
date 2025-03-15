import { v4 as uuid } from "uuid"; // Import UUID to generate unique IDs

// Initialize an empty array to store products
let products = [];

// @desc    Get all products
// @route   GET /products
export const getAllProducts = (req, res) => {
  console.log(`Products in the database: ${products}`); // Log current products in the console
  res.send(products); // Send the list of products as a response
};

// @desc    Create a new product
// @route   POST /products
export const createProduct = (req, res) => {
  const product = req.body; // Get the product data from the request body

  // Add product to the array with a unique ID
  products.push({ ...product, id: uuid() });

  console.log(`Product [${product.name}] added to the database`);
  res.status(201).send(`Product [${product.name}] added to the database`);
};

// @desc    Get a product by ID
// @route   GET /products/:id
export const getProduct = (req, res) => {
  const product = products.find((item) => item.id === req.params.id);

  if (!product) {
    return res.status(404).send("Product not found");
  }

  res.send(product); // Send the requested product as a response
};

// @desc    Delete a product by ID
// @route   DELETE /products/:id
export const deleteProduct = (req, res) => {
  products = products.filter((product) => product.id !== req.params.id);

  console.log(`Product with id ${req.params.id} has been deleted`);
  res.send(`Product with id ${req.params.id} has been deleted`);
};

// @desc    Update a product by ID
// @route   PUT /products/:id
export const updateProduct = (req, res) => {
  const product = products.find((item) => item.id === req.params.id);

  if (!product) {
    return res.status(404).send("Product not found");
  }

  // Update product fields with new data from the request body
  product.name = req.body.name;
  product.description = req.body.description;
  product.price = req.body.price;

  console.log(`Product with id ${req.params.id} has been updated`);
  res.send(`Product with id ${req.params.id} has been updated`);
};
