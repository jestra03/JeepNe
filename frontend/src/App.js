// src/App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./ui/NavigationBar/NavBar.js";
import "./App.css";
import AnimatedRoutes from "./ui/AnimatedRoutes.js";
import ScrollUpButton from "./ui/ScrollUpButton.js";
import Footer from "./ui/Footer.js";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <div className="App">
          <NavBar />
          <AnimatedRoutes />
          <ScrollUpButton />
          <Footer />
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
