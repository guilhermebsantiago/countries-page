import axios from "axios";
import Card from "./Card";
import { useQuery } from "@tanstack/react-query";

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
  const { data, isLoading } = useQuery({
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
      {isLoading
        ? <div className="h-screen flex justify-center w-full">
          <p className="font-bold">Data is loading...</p>
        </div>
        : data?.map((e, index) => (
          <Card
            capital={e.capital}
            country={e.name.common}
            population={e.population}
            src={e.flags.svg}
            region={e.region}
            key={index}
          />
        ))}
    </div>
  );
}

export default Cards;
