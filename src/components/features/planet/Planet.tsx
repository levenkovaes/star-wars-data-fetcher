import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { nanoid } from "@reduxjs/toolkit";

import { IPlanetDto } from "../../../store/features/planetsSlice/types";
import { LoadingSpinner } from "../../common/LoadingSpinner/LoadingSpinner";
import { SH1, SLink } from "../../common/styled";

export const Planet = () => {
  const { planetId } = useParams();
  const [planetResponse, setPlanetResponse] = useState<IPlanetDto>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPlanet();
  }, []);

  const getPlanet = async () => {
    return await axios
      .get(`https://swapi.dev/api/planets/${planetId}`)
      .then((response) => {
        setPlanetResponse(response.data);
        setIsLoading(false);
      });
  };

  const data =
    planetResponse &&
    Object.entries(planetResponse)
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

  console.log(planetResponse);
  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        planetResponse && (
          <>
            <SH1>{planetResponse.name}</SH1>
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
