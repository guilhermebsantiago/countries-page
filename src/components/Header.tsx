import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";

function Header() {

  const [darkMode, setDarkMode] = useState(false)
  function toggleTheme(){
    document.body.classList.toggle("dark")
    setDarkMode(!darkMode)
  }

  useGSAP(()=>{



    gsap.from(".toggleMode", {
      y:-50,
      rotate: 190,
      opacity:0
    })

    gsap.from(".text", {
      y:-50,
      opacity:0,
      stagger: 0.1
    })
  },[])

  return (
    <header className="w-full flex items-center py-6 shadow-full z-2 justify-between px-5 md:px-20 bg-white dark:bg-very-dark-blue">
      <h2 className="dark:text-white text-very-dark-blue-light-text font-extrabold">Where in the world?</h2>
      <button className="dark:text-white font-semibold text-very-dark-blue-light-text flex justify-center items-center " onClick={toggleTheme}>
        {darkMode ?  <IoMoonSharp className="toggleMode pr-1"/> : <IoMoonOutline className="toggleMode pr-1"/>}
        {Array.from("Dark Mode").map((char,index)=>(<span key={index} className="text">{char}</span>))}
        
      </button>
    </header>
  )
}

export default Header