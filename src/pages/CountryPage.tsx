import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { useParams } from 'react-router-dom'
import { Error } from '../components/Error';

export const CountryPage = () => {
  interface Data {
    flags: {
      png: string;
      svg: string;
      alt: string;
    };
    name: {
      common: string;
      official?: string;
      nativeName: {
        eng: {
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
      [key:string]: string;
    };
    borders: string[];
    population: number;
  }
  
  const {countryName} = useParams()
    
    const { data, isLoading, error } = useQuery({
      queryKey: [""],
      queryFn: async () => {
        const { data } = await axios.get(
          `https://restcountries.com/v3.1/name/${countryName}?fields=name,flags,population,region,subregion,capital,tld,currencies,languages,borders`
        );
        console.log(data)
        return data as Data[];
      },
    });
    
  return (
    <>
    {error?<Error/>:null}
    {isLoading?
      <div className="h-screen flex justify-center w-full">
    <p className="font-bold">Data is loading...</p>
  </div>:
      <div className='w-full h-full flex justify-center'>
        <img src={data[0]?.flags.svg} alt={data[0]?.flags.alt} className='w-1/3'/>
        <div>
          <div>
        <p className="font-bold dark:text-white text-very-dark-blue">
            {data[0]?.name.common}
          </p>
          <p className="dark:text-white text-very-dark-blue">
            <span className="font-semibold">Native Name:</span> {data[0]?.name.nativeName.eng.common}
          </p>
          <p className="dark:text-white text-very-dark-blue">
            <span className="font-semibold">Population:</span> {data[0]?.population}
          </p>
          <p className="dark:text-white text-very-dark-blue">
            <span className="font-semibold">Region:</span> {data[0]?.capital}
          </p>
          <p className="dark:text-white text-very-dark-blue">
            <span className="font-semibold">Sub Region:</span> {data[0]?.subregion}
          </p>
          <p className="dark:text-white text-very-dark-blue">
            <span className="font-semibold">Capital:</span> {data[0]?.capital}
          </p>
        </div>
        <div>
        <p className="dark:text-white text-very-dark-blue">
            <span className="font-semibold">Top Level Domain:</span> {data[0]?.tld}
          </p>
          <p className="dark:text-white text-very-dark-blue">
            <span className="font-semibold">Currencies:</span> {Object.entries(data[0]?.currencies).map((e,i,arr)=>{
              if(i == arr.length -1){
                return e[1].name
              }
              return `${e[1].name}, `}
              )}
          </p>
          <p className="dark:text-white text-very-dark-blue">
            <span className="font-semibold">Languages:</span> {Object.values(data[0]?.languages).map((e,i,arr)=>{
               if(i == arr.length -1){
                return e
              }
              return `${e}, `
            })}
          </p>
        </div>

        <p className="dark:text-white text-very-dark-blue">
            <span className="font-semibold">Border Countries:</span> {data[0]?.borders}
          </p>

        </div>
      </div>
  }
    </>
  );
}