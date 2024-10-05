export const menuVariants = {
  hidden: {
    x: "-100%", // Start offscreen to the left
    opacity: 0, // Start invisible
  },
  visible: {
    x: 0, // Move into view
    opacity: 1, // Become visible
    transition: {
      type: "spring", // Use spring animation
      stiffness: 100, // Bouncy effect
      damping: 20,
    },
  },
  exit: {
    x: "-100%", // Exit by sliding back out to the left
    opacity: 0, // Fade out while sliding
    transition: {
      duration: 0.3, // Faster exit
    },
  },
};
