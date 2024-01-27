import { useState, useEffect } from "react"
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/theme";


function App() {

  const [theme, setTheme] = useState("light");

  const lightTheme = () => setTheme("light");
  const darkTheme = () => setTheme("dark");

  const handleChange = () => {
    if (theme === "light") {
      return darkTheme();
    } else {
      return lightTheme();
    }
  }

  useEffect(() => {
    document.querySelector('html')?.classList.remove('light', 'dark');
    document.querySelector('html')?.classList.add(theme);
  })

  return (
    <ThemeProvider value={{ theme, lightTheme, darkTheme }}>
      <Navbar />
      <div className="mt-[69px] w-full h-[90.1vh] bg-white dark:bg-gray-900 duration-200  flex items-center justify-center">
        <button type="button" onClick={handleChange} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Theme Changer</button>

      </div>
    </ThemeProvider>
  )
}

export default App
