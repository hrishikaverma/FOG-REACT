import React from "react";
import ReactDOM from "react-dom/client"; // React 18 specific import
import App from "./App.js"; // Import the App component
import "./index.css"; // Optional: Add your global styles if needed

// Link the React application to the 'root' element in public/index.html
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode> // Ensures best practices and helps catch warnings during development
);
export default App;
