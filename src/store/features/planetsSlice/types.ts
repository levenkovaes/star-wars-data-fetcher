export interface IState {
  planetsResponse: IPlanetsResponse;
  isLoading: boolean;
}

export interface IGetPlanetsAction {
  url: string;
}

export interface IPlanetDto {
  name: string;
  population: number;
  url: string;
}

export interface IPlanetsResponse {
  count?: number;
  next?: string;
  previous?: string;
  results?: IPlanetDto[];
}
