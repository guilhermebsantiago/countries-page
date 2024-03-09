import { IoSearchOutline } from "react-icons/io5";
import Cards from "./Cards";

function CountrySection() {
  return (
    <div className="w-full bg-very-light-gray dark:bg-very-dark-blue">
      
      <div className="w-full md:px-20 px-5 pt-14 flex justify-between">
        <div className="flex gap-2 px-3 items-center bg-white dark:text-white text-very-dark-blue-light-text  rounded-lg shadow-full border-gray-200 w-1/3 dark:bg-dark-blue">
          <IoSearchOutline />
          <input type="text" className="w-full p-3 focus:outline-0 dark:bg-dark-blue bg-white" placeholder="Search for a country..."/>
        </div>
        <div className="shadow-full flex justify-center items-center rounded-lg p-3 bg-white dark:bg-dark-blue text-very-dark-blue-light-text dark:text-white">
          <select  name="regionFilter" id="filter" className=" rounded-md focus:outline-0 bg-white dark:bg-dark-blue">  
            <option value="" disabled selected hidden>Filter by Region</option>          
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option></select>
        </div>
      </div>

      <Cards/>

    </div>
  )
}

export default CountrySection