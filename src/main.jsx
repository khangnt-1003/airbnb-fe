import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import queryClient from './queryclient.js';
import { QueryClientProvider } from '@tanstack/react-query';
import { ModalProvider } from './pages/LoginPage/components/LoginFormModal/ModalContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ModalProvider>
        <App />
      </ModalProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
