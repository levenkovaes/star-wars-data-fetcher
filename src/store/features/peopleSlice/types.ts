export interface IState {
  peopleResponse: IPeopleResponse;
  isLoading: boolean;
}

export interface IGetPeopleAction {
  url: string;
}

export interface IPersonDto {
  name: string;
  url: string;
  homeworld: string;
}

export interface IPeopleResponse {
  count?: number;
  next?: string;
  previous?: string;
  results?: IPersonDto[];
}
