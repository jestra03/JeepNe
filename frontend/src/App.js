// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import LaunchPage from './pages/LaunchPage';
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Pages */}
            <Route path="/home" element={<LaunchPage />} />
          </Routes>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
