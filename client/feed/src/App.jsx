import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Create from './pages/Create';
import Feed from './pages/Feed';
import './App.css';

/**
 * Main application component responsible for defining the routing structure.
 */
const App = () => {
  return (
    // Router component to manage browser navigation
    <Router>
      <Routes>
        {/* Redirecting the base URL to the feed page by default */}
        <Route path="/" element={<Navigate to="/feed" replace />} />
        {/* Route definitions for different sections of the app */}
        <Route path="/feed" element={<Feed />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
  );
};

export default App;