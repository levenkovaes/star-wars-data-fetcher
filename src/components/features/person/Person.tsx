import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { nanoid } from "@reduxjs/toolkit";

import { LoadingSpinner } from "../../common/LoadingSpinner/LoadingSpinner";
import { SH1, SLink } from "../../common/styled";
import { PersonDto } from "../people/People";

export const Person = () => {
  const { personId } = useParams();
  const [personResponse, setPersonResponse] = useState<PersonDto>();
  const [isLoading, setIsLoading] = useState(true);
  //   const [personData, setPersonData] = useState<PersonDto>();

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
    //   .then(() => setPersonData(personResponse));
  };

  //   const getLinkData = async (link: string) => {
  //     const result = await (await axios.get(link)).data;

  //     console.log(result);
  //     return { name: result.name, url: result.url };
  //   };

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
      .map((el) => {
        if (typeof el[1] === "object") {
          if (!el[1].length) {
            el[1] = "-";
          }
          //   else {
          //     el[1] = "obj";
          //   }
        } else if (/^https:\/\/swapi.dev\/api\//.test(el[1])) {
          el[1] = (
            <SLink to={`/${el[1].replace(/^https:\/\/swapi.dev\/api\//, "")}`}>
              {el[1]}
            </SLink>
          );

          //   getLinkData(el[1]);
          //   el[1] = <a>{getLinkData(el[1]).name}</a>;
        }

        return el;
      });

  console.log(personResponse);

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
