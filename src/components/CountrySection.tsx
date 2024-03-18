import { IoSearchOutline } from "react-icons/io5";
import Cards from "./Cards";
import { useState } from "react";
import Header from "./Header";

function CountrySection() {

  const [query, setQuery] = useState("")
  const [region, setRegion] = useState("")

  return (
    <div className="w-full min-h-screen bg-very-light-gray dark:bg-very-dark-blue">
      <Header/>
      <div className="w-full md:px-20 px-5  pt-7 md:pt-14 md:flex-row flex-col flex justify-between">
        <div className="flex w-full gap-2 px-3 items-center bg-white dark:text-white text-very-dark-blue-light-text  rounded-lg shadow-full border-gray-200 md:w-1/3 dark:bg-dark-blue">
          <IoSearchOutline />
          <input type="text" className="w-full p-3 focus:outline-0 dark:bg-dark-blue bg-white" placeholder="Search for a country..." value={query} onChange={(e)=>{setQuery(e.target.value)}}/>
        </div>
        <div className="md:mt-0 mt-10 shadow-full w-3/5 md:w-auto flex justify-center items-center rounded-lg p-3 bg-white dark:bg-dark-blue text-very-dark-blue-light-text dark:text-white">
          <select  name="regionFilter" id="filter" className=" rounded-md focus:outline-0 cursor-pointer bg-white dark:bg-dark-blue" defaultValue={""} onChange={(e) => setRegion((e.target as HTMLSelectElement).value)}>  
            <option value="" disabled hidden >Filter by Region</option>          
            <option value="Africa" >Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option></select>
        </div>
      </div>

      <Cards query={query} region={region}/>

    </div>
  )
}

export default CountrySection