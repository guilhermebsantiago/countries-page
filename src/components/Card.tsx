
import { Link } from "react-router-dom";

interface ICardProps {
  src: string;
  population: number;
  region: string;
  capital: [string];
  country: string;
}


function Card({ src, population, region, capital, country }: ICardProps) {
  
  return (
    <Link to={`/country/${country}`} className="card w-full md:w-1/5">
      <div
        className="w-full h-80 bg-white flex flex-col rounded-md dark:bg-dark-blue"
      >
        <img
          src={src}
          className="w-full h-40 rounded-t-md object-cover"
          alt={country}
        />
        <div className="flex flex-col p-6">
          <p className="font-bold dark:text-white text-very-dark-blue">
            {country}
          </p>
          <p className="dark:text-white text-very-dark-blue">
            <span className="font-semibold">Population:</span> {population}
          </p>
          <p className="dark:text-white text-very-dark-blue">
            <span className="font-semibold">Region:</span> {region}
          </p>
          <p className="dark:text-white text-very-dark-blue">
            <span className="font-semibold">Capital:</span> {capital}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
