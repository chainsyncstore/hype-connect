import React from 'react';
import { createRoot } from 'react-dom/client';
import WebApp from './WebApp';

const rootElement = document.getElementById('app-root');
const root = createRoot(rootElement);
root.render(<WebApp />);
