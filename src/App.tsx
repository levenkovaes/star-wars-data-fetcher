import { useEffect, useState } from "react";

import { nanoid } from "@reduxjs/toolkit";

interface PlanetDto {
  name: string;
  population: number;
}

interface PlanetResponce {
  count: number;
  next?: string;
  previous?: string;
  results: PlanetDto[];
}

export const App = () => {
  const [result, setResult] = useState<PlanetResponce>();

  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = async () => {
    await fetch("https://swapi.dev/api/planets")
      .then((response) => response.json())
      .then((response) => setResult(response));
  };

  const planets = result?.results;

  console.log(planets);

  return (
    <div>
      {planets && (
        <ul>
          {planets.map((el) => (
            <li key={nanoid()}>
              <span>{el.name}, </span>
              <span>population: {el.population}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
