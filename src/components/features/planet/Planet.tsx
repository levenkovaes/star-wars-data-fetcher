import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { nanoid } from "@reduxjs/toolkit";

import { LoadingSpinner } from "../../common/LoadingSpinner/LoadingSpinner";
import { SH1 } from "../../common/styled";
import { PersonDto } from "../people/People";

export const Planet = () => {
  const { planetId } = useParams();
  const [planetResponse, setPlanetResponse] = useState<PersonDto>();
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
              {Object.entries(planetResponse)
                ?.filter(
                  (el) =>
                    el[0] !== "name" &&
                    el[0] !== "url" &&
                    el[0] !== "created" &&
                    el[0] !== "edited"
                )
                .map((el) => (
                  <li key={nanoid()}>
                    <span
                      style={{
                        fontWeight: "bolder",
                        textDecoration: "underline",
                      }}
                    >
                      {el[0].replace("_", " ")}:
                    </span>
                    <span>
                      {" "}
                      {
                        el[1]
                        //   el[1].length ? el[1] : "-"
                      }
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
