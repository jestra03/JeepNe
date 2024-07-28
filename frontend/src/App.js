// src/App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import LaunchPage from "./pages/LaunchPage";
import PricingPage from "./pages/PricingPage";
import NavBar from "./ui/NavigationBar/NavBar.js";
import "./App.css";
import AnimatedRoutes from "./pages/components/AnimatedRoutes.js";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <div className="App">
          <NavBar />
          <AnimatedRoutes />
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
