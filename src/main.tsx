import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastProvider } from 'torrada';
import 'torrada/style.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastProvider defaultDuration={5000}>
      <App />
    </ToastProvider>
  </StrictMode>
);
