import React, { useState, useEffect } from "react";
import { Box, IconButton, Fade } from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";
import { accentOne, accentTwo, primaryColor } from "../themeSettings";

function ScrollUpButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <Box>
      <Fade
        in={isVisible}
        transition={{ enter: { duration: 0.5 }, exit: { duration: 0.5 } }}
      >
        <IconButton
          icon={<ChevronUpIcon />}
          isRound
          size="lg"
          onClick={scrollToTop}
          backgroundColor={primaryColor}
          color={accentOne}
          position="fixed"
          bottom="2rem"
          right="2rem"
          zIndex="1000"
          boxShadow="0 4px 20px rgba(0, 0, 0, 0.18)"
        />
      </Fade>
    </Box>
  );
}

export default ScrollUpButton;
