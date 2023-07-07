import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { nanoid } from "@reduxjs/toolkit";

import {
  getPeople,
  selectIsLoading,
  selectPeopleResponse,
} from "../../../store/features/peopleSlice/peopleSlice";
import { LoadingSpinner } from "../../common/LoadingSpinner/LoadingSpinner";
import { SButton, SH1, SLink } from "../../common/styled";

export const People = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const peopleResponse = useSelector(selectPeopleResponse);
  const [searchParams, setSearchParams] = useSearchParams({ page: "1" });

  useEffect(() => {
    dispatch(
      getPeople({
        url: `https://swapi.dev/api/people?page=${searchParams.get("page")}`,
      })
    );
  }, [dispatch, searchParams]);

  const people = peopleResponse?.results;

  return (
    <div>
      <SH1>People</SH1>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <ul>
            {people &&
              people.map((el) => {
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
