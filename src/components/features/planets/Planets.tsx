import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { nanoid } from "@reduxjs/toolkit";

import { LoadingSpinner } from "../../common/LoadingSpinner/LoadingSpinner";
import { SButton, SH1, SLink } from "../../common/styled";

export interface PlanetDto {
  name: string;
  population: number;
  url: string;
}

interface PlanetsResponse {
  count: number;
  next?: string;
  previous?: string;
  results: PlanetDto[];
}

export const Planets = () => {
  const [planetsResponse, setPlanetsResponse] = useState<PlanetsResponse>();
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams({ page: "1" });

  console.log(searchParams.get("page"));

  useEffect(() => {
    getPlanets();
  }, []);

  const getPlanets = async (
    url = `https://swapi.dev/api/planets?page=${searchParams.get("page")}`
  ) => {
    await axios.get(url).then((response) => {
      setPlanetsResponse(response.data);
      setIsLoading(false);
    });
  };

  const planets = planetsResponse?.results;

  // console.log(planets);
  return (
    <div>
      <SH1>Planets</SH1>

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <ul>
            {planets &&
              planets.map((el) => (
                <li key={nanoid()}>
                  <SLink
                    to={`/planets/${el.url.match(
                      /(?<=https:\/\/swapi.dev\/api\/planets\/)\d+(?=\/)/
                    )}`}
                  >
                    {el.name}
                  </SLink>
                </li>
              ))}
          </ul>
          <SButton
            disabled={!planetsResponse?.previous}
            onClick={() => {
              if (planetsResponse?.previous) {
                getPlanets(planetsResponse.previous);
                setIsLoading(true);
                setSearchParams({
                  page: `${Number(searchParams.get("page")) - 1}`,
                });
              }
            }}
          >
            prev
          </SButton>
          <SButton
            disabled={!planetsResponse?.next}
            onClick={() => {
              if (planetsResponse?.next) {
                getPlanets(planetsResponse.next);
                setIsLoading(true);
                setSearchParams({
                  page: `${Number(searchParams.get("page")) + 1}`,
                });
              }
            }}
          >
            next
          </SButton>
        </>
      )}
    </div>
  );
};
