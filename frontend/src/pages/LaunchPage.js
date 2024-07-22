// src/pages/LaunchPage.js
import React from "react";
import { Box } from "@chakra-ui/react";
import AvbSlideshow from "./components/AvbSlideshow";
import ChecklistTypeSection from "./components/ChecklistTypeSection";
import InfoSection from "./components/InfoSection";
import PortfolioSection from "./components/PortfolioSection"; // Import the new component
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";

const slides = [
  {
    id: 1,
    smallHeader: "Ready to redefine your online presence?",
    bigHeader: "Build your business with Jeepney",
    description:
      "We offer a local business alternative with no commission fees, tools to boost customer engagement, and fully customized solutions that capture your unique character.",
    buttonText: "Build Your Business",
    buttonAction: () =>
      document
        .getElementById("checklist-type-section")
        .scrollIntoView({ behavior: "smooth" }),
    image: slide1,
  },
  {
    id: 2,
    smallHeader: "Want to expand your outreach?",
    bigHeader: "We Create Interactive Experiences",
    description:
      "Our services help connects you and the customer, capturing a broad spectrum of consumers that actively use digital media.",
    buttonText: "Learn More",
    buttonAction: () =>
      document
        .getElementById("info-section")
        .scrollIntoView({ behavior: "smooth" }),
    image: slide2,
  },
];

const portfolioImages = [
  { src: "/path/to/image1.jpg", link: "https://example.com" },
  { src: "/path/to/image2.jpg", link: "https://example.com" },
  { src: "/path/to/image3.jpg", link: "https://example.com" },
  // Add more images as needed
];

const LaunchPage = () => {
  return (
    <Box fontFamily="'Manrope', sans-serif">
      {/* 1st Section */}
      <AvbSlideshow slides={slides} />
      {/* 2nd Section */}
      <div id="checklist-type-section" style={{ marginTop: "50px" }} />
      <ChecklistTypeSection />
      {/* 3rd Section */}
      <div id="info-section" />
      <InfoSection />
      {/* Portfolio Section */}
      <PortfolioSection portfolioImages={portfolioImages} />{" "}
      {/* Use the new component */}
    </Box>
  );
};

export default LaunchPage;
