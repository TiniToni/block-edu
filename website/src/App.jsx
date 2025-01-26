import { useState } from 'react';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import './App.css';

import HomePage from './pages/Home';
import Dashboard from './pages/Dashboard';
import Prologue from './pages/Prologue/';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/prologue" element={<Prologue />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
