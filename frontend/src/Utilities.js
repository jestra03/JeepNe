export const scrollToRef = (elementRef) => {
  const offset = 70; //To account for the navbar
  const elementTop =
    elementRef.current.getBoundingClientRect().top + window.pageYOffset;
  const scrollToPosition = elementTop - offset;

  window.scrollTo({
    top: scrollToPosition,
    behavior: "smooth",
  });
};
