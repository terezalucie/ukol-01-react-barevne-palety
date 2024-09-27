import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import App from './App';

createRoot(
  document.querySelector('#app'),
).render(<App />);
