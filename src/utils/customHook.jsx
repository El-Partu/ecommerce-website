import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDarkMode, setLightMode } from "../Global State/theme/themeProvider";

export function useDarkMode() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (window.matchMedia("prefers-color-scheme: dark").matches) {
      dispatch(setDarkMode());
    } else {
      dispatch(setLightMode());
    }
  }, []);
}
