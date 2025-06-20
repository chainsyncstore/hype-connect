
import React from 'react';
import { createRoot } from 'react-dom/client';
import WebApp from './WebApp';

const rootElement = document.getElementById('app-root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<WebApp />);
} else {
  console.error('Root element not found');
}
