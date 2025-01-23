const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)
app.use(express.json()); // Parse incoming JSON requests

// Serve static images from the "public" folder (local images only)
app.use('/images', express.static(path.join(__dirname, 'public', 'images')));

// Dummy product data with external image URLs
const products = [
  { id: 1, name: "Sofa", price: "2500", image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 2, name: "Table", price: "5000", image: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 3, name: "Sofa", price: "10000", image: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 4, name: "Sandals", price: "2500", image: "https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 5, name: "Jeans", price: "5000", image: "https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 6, name: "Headphone", price: "10000", image: "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 7, name: "Toy", price: "5000", image: "https://images.pexels.com/photos/1878468/pexels-photo-1878468.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 8, name: "Chair", price: "10000", image: "https://images.pexels.com/photos/827518/pexels-photo-827518.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 9, name: "Trouser", price: "1200", image: "https://images.pexels.com/photos/30346051/pexels-photo-30346051/free-photo-of-youthful-san-isidro-fashion-portrait.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 10, name: "JBL", price: "7000", image: "https://images.pexels.com/photos/27129211/pexels-photo-27129211/free-photo-of-portable-bluetooth-speaker-jbl-flip-6-on-a-garden-table.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 11, name: "Sofa", price: "80000", image: "https://images.pexels.com/photos/945688/pexels-photo-945688.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 12, name: "Shoes", price: "5000", image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 13, name: "Makeup", price: "7000", image: "https://images.pexels.com/photos/1926620/pexels-photo-1926620.jpeg?auto=compress&cs=tinysrgb&w=600" }
];

// Route to get the product list
app.get('/api/products', (req, res) => {
  console.log('Products:', products); // Log products in the terminal
  res.json(products);  // Return product data as JSON
});

// Serve static files if you want to serve your React app from the same server
// Make sure to build your React app before using this
app.use(express.static(path.join(__dirname, 'client', 'build')));

// For any other route (such as visiting the homepage), serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// Set the port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
