// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // This should resolve to src/App.js

console.log("src/index.js: CRA-standard entry loaded");

// Ensure 'app-root' matches the ID in your public/index.html
const rootElement = document.getElementById('app-root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("src/index.js: Root element with ID 'app-root' not found.");
}
