import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { nanoid } from "@reduxjs/toolkit";

import { IPersonDto } from "../../../store/features/peopleSlice/types";
import { LoadingSpinner } from "../../common/LoadingSpinner/LoadingSpinner";
import { SH1, SLink } from "../../common/styled";

export const Person = () => {
  const { personId } = useParams();
  const [personResponse, setPersonResponse] = useState<IPersonDto>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPerson();
  }, []);

  const getPerson = async () => {
    await fetch(`https://swapi.dev/api/people/${personId}`)
      .then((response) => response.json())
      .then((response) => {
        setPersonResponse(response);
        setIsLoading(false);
      });
  };

  const data =
    personResponse &&
    Object.entries(personResponse)
      .filter(
        (el) =>
          el[0] !== "name" &&
          el[0] !== "url" &&
          el[0] !== "created" &&
          el[0] !== "edited"
      )
      .map(([key, value]) => {
        let newKey = key.replace("_", " ");
        let newValue = value;

        if (Array.isArray(value) && !value.length) {
          newValue = "-";
        } else if (Array.isArray(value) && value.length) {
          newValue = (
            <ul>
              {value.map((el: string) =>
                /^https:\/\/swapi.dev\/api\//.test(el) ? (
                  <li key={nanoid()}>
                    <SLink
                      to={`/${el.replace(/^https:\/\/swapi.dev\/api\//, "")}`}
                    >
                      {el}
                    </SLink>
                  </li>
                ) : (
                  <li key={nanoid()}> {el}</li>
                )
              )}
            </ul>
          );
        } else if (/^https:\/\/swapi.dev\/api\//.test(value)) {
          console.log(value);
          newValue = (
            <SLink to={`/${value.replace(/^https:\/\/swapi.dev\/api\//, "")}`}>
              {value}
            </SLink>
          );
        }

        return [newKey, newValue];
      });

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        personResponse && (
          <>
            <SH1>{personResponse.name}</SH1>
            <ul>
              {data?.map((el) => (
                <li key={nanoid()}>
                  <span
                    style={{
                      fontWeight: "bolder",
                      textDecoration: "underline",
                    }}
                  >
                    {el[0]}:
                  </span>
                  <span>
                    &nbsp;
                    {el[1]}
                  </span>
                </li>
              ))}
            </ul>
          </>
        )
      )}
    </div>
  );
};
