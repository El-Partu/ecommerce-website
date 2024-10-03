import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
// import { darkMode } from "./Global State/theme/themeProvider";
import { useDarkMode } from "./utils/customHook";
import { useSelector } from "react-redux";

function App() {
  useDarkMode();
  const { darkMode } = useSelector((store) => store.theme);
  // const [theme, setTheme] = useState();
  return (
    <div className={`${darkMode === "dark" ? "bg-slate-800" : ""} h-screen`}>
      <RouterProvider router={router} />;
    </div>
  );
}
export default App;
