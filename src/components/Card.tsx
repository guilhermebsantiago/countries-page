import React from 'react'

interface ICardProps {
  src: string,
  population: string,
  region: string,
  capital: string,
  country: string
}

function Card({src, population, region, capital, country}:ICardProps){
  return (
    <div className='w-60 h-80'>
      <img src={src} className='h-1/3 w-full' alt={country} />
      <div>
        <p>{country}</p>

        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
      </div>
    </div>
  )
}

export default Card