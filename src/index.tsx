import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Dashboard from './pages/Dashboard';
import Gestao from './pages/Gestao';
import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="cadastro" element={<Cadastro />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="gestao" element={<Gestao />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
