import axios from "axios";
import Card from "./Card";
import { useQuery } from "@tanstack/react-query";
import { Error } from "./Error";

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
      ell: {
        official: string;
        common: string;
      };
      tur: {
        official: string;
        common: string;
      };
    };
  };
  capital: [string];
  region: string;
  population: number;
}

function Cards() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["cardsQuery"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital"
      );
      return data as Data[];
    },
  });

  return (
    <div className=" flex flex-wrap gap-12 justify-between w-full py-12 md:px-20 px-5 h-full ">
      {error?<Error/>:null}
      {isLoading
        ? <div className="h-screen flex justify-center w-full">
          <p className="font-bold">Data is loading...</p>
        </div>
        : 
        <div className="w-full flex flex-wrap gap-16 px-5 md:px-0 justify-between">{data?.map((e, index) => (
          <Card
            capital={e.capital}
            country={e.name.common}
            population={e.population}
            src={e.flags.svg}
            region={e.region}
            key={index}
          />
        ))}</div>
        }
    </div>
  );
}

export default Cards;
