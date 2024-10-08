import React, { useEffect, useState, useRef } from "react";
import { Flex, IconButton, Avatar, Image } from "@chakra-ui/react";
import { FiMenu, FiHome, FiUser, FiDollarSign, FiPhone } from "react-icons/fi";
import NavItem from "./NavItem";
import logo from "./logo.png";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import {
  primaryColor,
  accentOne,
  textColor1,
  textColor2,
} from "../../themeSettings.js";

const pages = {
  Home: "/home",
  About: "/about",
  Pricing: "/pricing-plans",
  Support: "/support",
};

export default function NavBar() {
  const [navSize, changeNavSize] = useState("small");
  const [scrolling, setScrolling] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [bgColor, setBgColor] = useState("white");
  const [textColor, setTextColor] = useState("black");
  const [logoBrightness, setLogoBrightness] = useState("100%");

  const navigate = useNavigate(); // Hook for navigation
  const location = useLocation();

  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        changeNavSize("small");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function getMatchingPrefix(value, prefixes) {
    // Checks if a string value starts with any prefix in prefixes
    return prefixes.find((prefix) => value.startsWith(prefix));
  }

  useEffect(() => {
    // Sets the active item based on current page
    const keys = Object.keys(pages);
    const values = Object.values(pages);
    const index = values.indexOf(
      // Used to get which part of the navbar should be highlighted based on link/location
      getMatchingPrefix(location.pathname, Object.values(pages))
    );
    if (index !== -1) {
      setActiveItem(keys[index]);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      setScrolling(scrollPosition > 50);

      if (scrollPosition > 700) {
        // scrollPosTransition
        // can add a useState for scrollPosTransition later on for diff pages, 700 is hardcoded for the launch page
        setBgColor(primaryColor); // Background color when scrolled below 700
        setTextColor(textColor1); // Text color when scrolled below 700
        setLogoBrightness("1000%"); // Set brightness to 1000% to make it white
      } else {
        setBgColor(accentOne); // Default background color
        setTextColor(textColor2); // Default text color
        setLogoBrightness("100%"); // Default brightness for the logo
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavItemClick = (title, path) => {
    changeNavSize("small");
    navigate(path); // Use navigate to change the route
    window.scrollTo({
      // Scroll to top of screen
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Flex
      pos="fixed"
      top="0"
      left="50%"
      transform="translateX(-50%)"
      w="95%"
      maxW="1000px"
      h={navSize === "small" ? "55px" : "85px"}
      zIndex="overlay"
      backgroundColor={bgColor} // Dynamic background color
      boxShadow="0 4px 20px rgba(0, 0, 0, 0.18)"
      borderRadius="30px"
      flexDir="row"
      justifyContent="space-around"
      alignItems="center"
      as={motion.div}
      transition="0.3s linear"
      marginTop="15px"
      fontSize={{ base: "0.7rem", sm: "1rem" }}
      overflow="hidden"
      ref={navRef}
    >
      <NavItem
        navSize="small"
        icon={FiMenu}
        onClick={() => {
          changeNavSize(navSize === "small" ? "large" : "small");
        }}
      />
      <NavItem
        navSize={navSize}
        icon={FiHome}
        title="Home"
        description="This is the description for the dashboard."
        active={activeItem === "Home"}
        onClick={() => handleNavItemClick("Home", "/home")} // Add path
        textColor={textColor} // Pass textColor to NavItem
      />
      <NavItem
        navSize={navSize}
        icon={FiUser}
        title="About"
        active={activeItem === "About"}
        onClick={() => handleNavItemClick("About", "/about")} // Add path
        textColor={textColor} // Pass textColor to NavItem
      />
      <Image
        src={logo}
        alt="Logo"
        width={{ base: "100px" }}
        height="auto"
        cursor="pointer"
        objectFit="contain"
        userSelect="none"
        display={navSize === "large" ? "none" : ""}
        filter={`brightness(${logoBrightness})`} // Apply brightness filter to the logo
        transition="filter 0.3s ease-in-out" // Smooth transition for brightness
        onClick={() => handleNavItemClick("Home", "/home")} // Add path
      />
      <NavItem
        navSize={navSize}
        icon={FiDollarSign}
        title="Pricing"
        active={activeItem === "Pricing"}
        onClick={() => handleNavItemClick("Pricing", "/pricing-plans")} // Add path
        textColor={textColor} // Pass textColor to NavItem
      />
      <NavItem
        navSize={navSize}
        icon={FiPhone}
        title="Support"
        active={activeItem === "Support"}
        onClick={() => handleNavItemClick("Support", "/support")} // Add path
        textColor={textColor} // Pass textColor to NavItem
      />
      <Flex alignItems="center">
        <Avatar size="sm" src="avatar-1.jpg" />
      </Flex>
    </Flex>
  );
}
