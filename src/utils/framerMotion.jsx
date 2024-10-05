export const menuVariants = {
  hidden: {
    x: "-100%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.5,
    },
  },
  exit: {
    x: "-100%",
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};
