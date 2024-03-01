import { useState } from "react";
import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";

function Header() {

  const [darkMode, setDarkMode] = useState(false)
  function toggleTheme(){
    document.body.classList.toggle("dark")
    setDarkMode(!darkMode)
  }

  return (
    <header className="w-full flex items-center py-6 shadow-md  justify-between px-5 md:px-20 bg-very-light-gray dark:bg-very-dark-blue">
      <h2 className="dark:text-white text-very-dark-blue-light-text font-extrabold">Where in the world?</h2>
      <button className="dark:text-white font-semibold text-very-dark-blue-light-text flex justify-center items-center gap-1" onClick={toggleTheme}>
        {darkMode ?  <IoMoonSharp/> : <IoMoonOutline/>}
        Dark Mode
      </button>
    </header>
  )
}

export default Header