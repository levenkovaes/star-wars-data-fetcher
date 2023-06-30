import { SH1, SLink } from "../../common/styled";
import { SHome } from "./styled";

export const Home = () => {
  return (
    <SHome>
      <SH1>Star Wars data</SH1>
      <SLink to="/planets?page=1">Planets</SLink>
      <SLink to="/people?page=1">People</SLink>
    </SHome>
  );
};
