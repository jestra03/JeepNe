import React, { useEffect, useState } from "react";
import { Flex, IconButton, Avatar, Image } from "@chakra-ui/react";
import { FiMenu, FiHome, FiUser, FiDollarSign, FiPhone } from "react-icons/fi";
import NavItem from "./NavItem";
import logo from "./logo.png";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const [navSize, changeNavSize] = useState("small");
  const [scrolling, setScrolling] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [bgColor, setBgColor] = useState("white");
  const [textColor, setTextColor] = useState("black");
  const [logoBrightness, setLogoBrightness] = useState("100%");

  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      setScrolling(scrollPosition > 50);

      if (scrollPosition > 700) {
        // scrollPosTransition
        // can add a useState for scrollPosTransition later on for diff pages, 700 is hardcoded for the launch page
        setBgColor("#156030"); // Background color when scrolled below 700
        setTextColor("white"); // Text color when scrolled below 700
        setLogoBrightness("1000%"); // Set brightness to 1000% to make it white
      } else {
        setBgColor("white"); // Default background color
        setTextColor("black"); // Default text color
        setLogoBrightness("100%"); // Default brightness for the logo
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavItemClick = (title, path) => {
    setActiveItem(title);
    navigate(path); // Use navigate to change the route
  };

  return (
    <Flex
      pos="fixed"
      top="0"
      left="50%"
      transform="translateX(-50%)"
      w="100%"
      maxW="1000px"
      h={navSize === "small" ? "55px" : "85px"}
      zIndex="overlay"
      backgroundColor={bgColor} // Dynamic background color
      boxShadow={scrolling ? "0 4px 20px rgba(0, 0, 0, 0.3)" : "none"}
      borderRadius="30px"
      flexDir="row"
      justifyContent="space-around"
      alignItems="center"
      transition="box-shadow 0.3s ease-in-out, height 0.3s ease-in-out, background-color 0.3s ease-in-out" // Transition for background color
      marginTop="15px"
      p="0 10px"
    >
      <IconButton
        background="none"
        _hover={{ background: "none" }}
        icon={<FiMenu color={textColor} />}
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
        boxSize={navSize === "small" ? "160px" : "190px"}
        objectFit="contain"
        filter={`brightness(${logoBrightness})`} // Apply brightness filter to the logo
        transition="filter 0.3s ease-in-out" // Smooth transition for brightness
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
        onClick={() => handleNavItemClick("Support", "/contact")} // Add path
        textColor={textColor} // Pass textColor to NavItem
      />
      <Flex alignItems="center">
        <Avatar size="sm" src="avatar-1.jpg" />
      </Flex>
    </Flex>
  );
}
