import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./AvbSlideshow.css"; // Import the CSS file for transitions

const AvbSlideshow = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState("next");
  const intervalTime = 4500; // 4.5 seconds
  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, [slides.length]);

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setTransitionDirection("next");
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, intervalTime);
  };

  const handlePreviousSlide = () => {
    setTransitionDirection("prev");
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    startAutoSlide();
  };

  const handleNextSlide = () => {
    setTransitionDirection("next");
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    startAutoSlide();
  };

  return (
    <div>
      <Box
        position="relative"
        bg="gray.200"
        height="30px"
        backgroundColor="#156030"
      />
      <Box
        position="relative"
        bg="gray.200"
        minHeight="40vw"
        backgroundColor="#156030"
      >
        <Flex
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          width="80%"
          maxWidth="1200px"
          height="80%"
          justify="center"
          align="center"
          flexDirection="row"
          px={4}
          textAlign="left"
          overflow="hidden"
        >
          <TransitionGroup className="transition-group">
            <CSSTransition
              key={`image-${currentSlide}-${transitionDirection}`}
              timeout={500}
              classNames={`image-${transitionDirection}`}
              unmountOnExit
            >
              <Box
                bg="white"
                className="slide-image"
                style={{
                  backgroundImage: `url(${slides[currentSlide].image})`,
                  backgroundSize: "85% auto",
                  backgroundPosition: "right",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "transparent",
                }}
              />
            </CSSTransition>

            <CSSTransition
              key={`content-${currentSlide}-${transitionDirection}`}
              timeout={500}
              classNames={transitionDirection}
              unmountOnExit
            >
              <Flex
                flexDirection="column"
                width="50%"
                height="100%"
                justify="center"
                className="slide-content"
              >
                <VStack spacing={4} align="start" color="white" w="100%">
                  <Heading
                    color="#B5A263"
                    fontSize="1.3vw"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    {slides[currentSlide].smallHeader}
                  </Heading>
                  <Heading
                    fontSize="3vw"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    {slides[currentSlide].bigHeader}
                  </Heading>
                  <Text color="#c7c7c6" fontSize="1.05vw">
                    {slides[currentSlide].description}
                  </Text>
                  <Button
                    colorScheme="teal"
                    onClick={slides[currentSlide].buttonAction}
                  >
                    {slides[currentSlide].buttonText}
                  </Button>
                </VStack>
              </Flex>
            </CSSTransition>
          </TransitionGroup>
        </Flex>
        <IconButton
          icon={<ChevronLeftIcon />}
          aria-label="Previous Slide"
          position="absolute"
          left="0"
          top="50%"
          transform="translateY(-50%)"
          zIndex="1"
          onClick={handlePreviousSlide}
          marginLeft="7.5px"
        />
        <IconButton
          icon={<ChevronRightIcon />}
          aria-label="Next Slide"
          position="absolute"
          right="0"
          top="50%"
          transform="translateY(-50%)"
          zIndex="1"
          onClick={handleNextSlide}
          marginRight="7.5px"
        />
      </Box>
    </div>
  );
};

export default AvbSlideshow;
