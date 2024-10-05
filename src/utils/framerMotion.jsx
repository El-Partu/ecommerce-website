export const menuVariants = {
  hidden: {
    x: 0, // Start offscreen to the right
  },
  visible: {
    x: "100%", // Move to the left (into view)
    transition: {
      //   type: "spring", // You can use "tween" or other types
      //   stiffness: 100, // Adjust how "bouncy" the animation is
      //   damping: 20,
      duration: 0.5,
      ease: "easeOutIn",
    },
    exit: {
      x: 0, // Exit by sliding back out to the right
      opacity: 0, // Fade out while sliding
      transition: {
        duration: 0.3, // Faster exit
      },
    },
  },
};
