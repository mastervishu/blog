import { useState, useEffect } from "react"
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/theme";


function App() {

  const [theme, setTheme] = useState(true);
  const toggle = () => theme ? setTheme(false): setTheme(true);

  useEffect(() => {
    document.querySelector('html')?.classList.remove('light', 'dark');
    document.querySelector('html')?.classList.add(theme ? 'light' : 'dark');
  });

  return (
    <ThemeProvider value={{ theme, toggle }}>
      <Navbar currentTheme={theme} themeToggle={toggle}/>
      <div className="mt-[65px] w-full h-[90.7vh] bg-white dark:bg-gray-900 flex items-center justify-center duration-500">
       
      </div>
    </ThemeProvider>
  )
}

export default App
