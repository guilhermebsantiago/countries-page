import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { useParams } from 'react-router-dom'

export const CountryPage = () => {
  interface Data {
    flags: {
      png: string;
      svg: string;
      alt: string;
    };
    name: {
      common: string;
      official: string;
      nativeName: {
        div: {
          official: string;
          common: string;
        };
      };
    };
    tld: string[];
    currencies: {
      [key:string]: {
        name: string;
        symbol: string;
      };
    };
    capital: string[];
    region: string;
    subregion: string;
    languages: {
      div: string;
    };
    borders: string[];
    population: number;
  }
  
  const {countryName} = useParams()
    
    const { data, isLoading } = useQuery({
      queryKey: [""],
      queryFn: async () => {
        const { data } = await axios.get(
          `https://restcountries.com/v3.1/name/${countryName}?fields=name,flags,population,region,subregion,capital,tld,currencies,languages,borders`
        );
        console.log(data)
        return data as Data[];
      },
    });
  
     const countryData = data
    
 
  return (
    <>
    {isLoading?
      <div className="h-screen flex justify-center w-full">
    <p className="font-bold">Data is loading...</p>
  </div>:
      <div className='w-full h-full flex justify-center'>
        <img src={countryData?.flags.svg} alt={countryData?.flags.alt} />
        <div>
          <div>
        <p className="font-bold dark:text-white text-very-dark-blue">
            {countryData?.name.common}
          </p>
          <p className="dark:text-white text-very-dark-blue">
            <span className="font-semibold">Native Name:</span> {countryData?.name.nativeName.div.official}
          </p>
          <p className="dark:text-white text-very-dark-blue">
            <span className="font-semibold">Population:</span> {countryData?.population}
          </p>
          <p className="dark:text-white text-very-dark-blue">
            <span className="font-semibold">Region:</span> {countryData?.capital}
          </p>
          <p className="dark:text-white text-very-dark-blue">
            <span className="font-semibold">Sub Region:</span> {countryData?.subregion}
          </p>
          <p className="dark:text-white text-very-dark-blue">
            <span className="font-semibold">Capital:</span> {countryData?.capital}
          </p>
        </div>
        <div>
        <p className="dark:text-white text-very-dark-blue">
            <span className="font-semibold">Top LEvel Domain:</span> {countryData?.tld}
          </p>
          <p className="dark:text-white text-very-dark-blue">
            <span className="font-semibold">Currencies:</span> {/* {countryData?.currencies} */}
          </p>
          <p className="dark:text-white text-very-dark-blue">
            <span className="font-semibold">Languages:</span> {countryData?.languages.div}
          </p>
        </div>

        <p className="dark:text-white text-very-dark-blue">
            <span className="font-semibold">Border Countries:</span> {countryData?.borders}
          </p>

        </div>
      </div>
  }
    </>
  );
}