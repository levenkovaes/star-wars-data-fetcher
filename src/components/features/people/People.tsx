import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { nanoid } from "@reduxjs/toolkit";

import { LoadingSpinner } from "../../common/LoadingSpinner/LoadingSpinner";
import { SButton, SH1, SLink } from "../../common/styled";

export interface PersonDto {
  name: string;
  url: string;
  homeworld: string;
}

interface IPeopleResponse {
  count: number;
  next?: string;
  previous?: string;
  results: PersonDto[];
}

export const People = () => {
  const [peopleResponse, setPeopleResponse] = useState<IPeopleResponse>();
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams({ page: "1" });

  useEffect(() => {
    getPeople();
  }, []);

  const getPeople = async (
    url = `https://swapi.dev/api/people?page=${searchParams.get("page")}`
  ) => {
    return await fetch(url)
      .then((result) => result.json())
      .then((result) => {
        setPeopleResponse(result);
        setIsLoading(false);
      });
  };

  //   console.log(peopleResponse?.results[0]);
  //   console.log(
  //     peopleResponse?.results[0].url.match(
  //       /(?<=https:\/\/swapi.dev\/api\/people\/)\d+(?=\/)/
  //     )
  //   );

  return (
    <div>
      <SH1>People</SH1>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <ul>
            {peopleResponse &&
              peopleResponse.results.map((el) => {
                return (
                  <li key={nanoid()}>
                    <SLink
                      to={`/people/${el.url.match(
                        /(?<=https:\/\/swapi.dev\/api\/people\/)\d+(?=\/)/
                      )}`}
                    >
                      {el.name}
                    </SLink>
                  </li>
                );
              })}
          </ul>

          <SButton
            disabled={!peopleResponse?.previous || isLoading}
            onClick={() => {
              if (peopleResponse?.previous) {
                getPeople(peopleResponse.previous);
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
            disabled={!peopleResponse?.next || isLoading}
            onClick={() => {
              if (peopleResponse?.next) {
                getPeople(peopleResponse.next);
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
