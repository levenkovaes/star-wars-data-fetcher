import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { nanoid } from "@reduxjs/toolkit";

import {
  getPlanets,
  selectIsLoading,
  selectPlanetsResponse,
} from "../../../store/features/planetsSlice/planetsSlice";
import { LoadingSpinner } from "../../common/LoadingSpinner/LoadingSpinner";
import { SButton, SH1, SLink } from "../../common/styled";

export const Planets = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const planetsResponse = useSelector(selectPlanetsResponse);

  const [searchParams, setSearchParams] = useSearchParams({ page: "1" });

  useEffect(() => {
    // handleGetPlanets();

    dispatch(
      getPlanets({
        url: `https://swapi.dev/api/planets?page=${searchParams.get("page")}`,
      })
    );
  }, [dispatch, searchParams]);

  const planets = planetsResponse?.results;

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
