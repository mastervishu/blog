import { useState, useEffect } from "react"
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/theme";
import Home from "./components/Home";
import About from "./components/About";


function App() {

  const [theme, setTheme] = useState(true);
  const toggle = () => theme ? setTheme(false) : setTheme(true);

  useEffect(() => {
    document.querySelector('html')?.classList.remove('light', 'dark');
    document.querySelector('html')?.classList.add(theme ? 'light' : 'dark');
  });

  return (
    <ThemeProvider value={{ theme, toggle }}>
      <Navbar currentTheme={theme} themeToggle={toggle} />
      <div className="mt-[65px] w-full bg-white dark:bg-gray-900 duration-500">
        <Home />
        <About />
      </div>
    </ThemeProvider>
  )
}

export default App
