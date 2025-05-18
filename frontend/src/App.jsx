import React from 'react';
import { Routes, Route } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';

import Marcacoes from './pages/marcacoes';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';

import { ReservationsProvider } from './context';

function App() {
  return (
    <ReservationsProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marcacoes" element={<Marcacoes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </ReservationsProvider>
  );
}

export default App;
