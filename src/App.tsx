import React from 'react';
import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Cadastro from './pages/Cadastro/Cadastro';
import Dashboard from './pages/Dashboard';
import Gestao from './pages/Gestao';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home/Home';
import { ThemeProvider } from '@mui/material/styles';
import { DarkTheme } from './themes';
import Box from '@mui/material/Box';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home/>} />
      <Route path="cadastro" element={<Cadastro />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="gestao" element={<Gestao />} />
    </Route>
  )
);

function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box width="100vw" height="100vh" bgcolor={DarkTheme.palette.background.default}>
        <RouterProvider router={router} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
