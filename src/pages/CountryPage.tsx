import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { Link, useParams } from "react-router-dom";
import { Error } from "../components/Error";
import Header from "../components/Header";
import { FaArrowLeftLong } from "react-icons/fa6";


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
        [key: string]: {
          official: string;
          common: string;
        };
      };
    };
    tld: string[];
    currencies: {
      [key: string]: {
        name: string;
        symbol: string;
      };
    };
    capital: string[];
    region: string;
    subregion: string;
    languages: {
      [key: string]: string;
    };
    borders: string[];
    population: number;
  }




  const { countryName } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: [""],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://restcountries.com/v3.1/name/${countryName}?fields=name,flags,population,region,subregion,capital,tld,currencies,languages,borders`
      );
      return data as Data[];
    },
  });


  if (error) return <Error />;

  if (isLoading)
    return (
      <div className="h-screen flex justify-center w-full">
        <p className="font-bold dark:text-white text-very-dark-blue-light-text">
          Data is loading...
        </p>
      </div>
    );

  if (!data) return <div>Content don't avaiable!</div>;


  
  return (
    <>
      <div className="h-screen w-screen">
        <Header />
        <div className="px-5 md:px-20 pt-10 pb-20  dark:bg-very-dark-blue bg-very-light-gray">
          <Link
            to={"/"}
            className=" flex gap-3 cursor-pointer px-4 py-2 shadow-full w-28 justify-center items-center h-10 rounded-md  dark:text-white dark:bg-dark-blue bg-white text-very-dark-blue-light-text"
          >
            <FaArrowLeftLong /> Back
          </Link>
        </div>

        <div className="w-full flex h-full items-start flex-col md:flex-row px-5 md:px-20  dark:bg-very-dark-blue bg-very-light-gray md:justify-between">
          <img
            src={data[0]?.flags.svg}
            alt={data[0]?.flags.alt}
            className="w-full max-h-[450px] md:w-5/12 "
          />
          <div className="flex flex-col md:w-1/2">
            <div className="flex flex-col md:flex-row">
              <div className="md:pr-12">
                <p className="font-extrabold dark:text-white text-very-dark-blue text-2xl max-sm:pt-10 pb-6 md:pb-6">
                  {data[0]?.name.common}
                </p>
                <p className=" dark:text-white text-very-dark-blue pt-2 md:pt-0">
                  <span className="font-semibold">Native Name:</span>{" "}
                  {Object.values(data[0]?.name.nativeName)[0].official}
                </p>
                <p className="dark:text-white text-very-dark-blue pt-2 md:pt-0 ">
                  <span className="font-semibold">Population:</span>{" "}
                  {data[0]?.population}
                </p>
                <p className="dark:text-white text-very-dark-blue pt-2 md:pt-0 ">
                  <span className="font-semibold">Region:</span>{" "}
                  {data[0]?.capital}
                </p>
                <p className="dark:text-white text-very-dark-blue pt-2 md:pt-0 ">
                  <span className="font-semibold">Sub Region:</span>{" "}
                  {data[0]?.subregion}
                </p>
                <p className="dark:text-white text-very-dark-blue pt-2 md:pt-0 ">
                  <span className="font-semibold ">Capital:</span>{" "}
                  {data[0]?.capital}
                </p>
              </div>
              <div className="pt-14 md:pt-14">
                <p className="dark:text-white text-very-dark-blue pt-2 md:pt-0 ">
                  <span className="font-semibold ">Top Level Domain:</span>{" "}
                  {data[0]?.tld}
                </p>
                <p className="dark:text-white text-very-dark-blue pt-2 md:pt-0 ">
                  <span className="font-semibold ">Currencies:</span>{" "}
                  {Object.entries(data[0]?.currencies).map((e, i, arr) => {
                    if (i == arr.length - 1) {
                      return e[1].name;
                    }
                    return `${e[1].name}, `;
                  })}
                </p>
                <p className="dark:text-white text-very-dark-blue pt-2 md:pt-0 ">
                  <span className="font-semibold">Languages:</span>{" "}
                  {Object.values(data[0]?.languages).map((e, i, arr) => {
                    if (i == arr.length - 1) {
                      return e;
                    }
                    return `${e}, `;
                  })}
                </p>
              </div>
            </div>
            <div className="dark:text-white  text-very-dark-blue pt-14  flex gap-4 flex-col md:flex-row ">
              <span className="font-bold text-lg w-60">Border Countries:</span>{" "}
              <div className="flex w-full gap-2 justify-around flex-wrap">
                {data[0]?.borders.map((e, i) => (
                  <div
                    key={i}
                    className=" w-1/4 h-8 shadow-full flex rounded-md justify-center py-1 px-6 bg-white dark:bg-dark-blue text-very-dark-blue-light-text dark:text-white"
                  >
                    {e}
                  </div>
                ))}{" "}
                {data[0]?.borders.length == 0 ? (
                  <p className="italic">Any countries</p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
