export interface IUser {
  login: string;
  name: string;
  avatar_url: string;
}

export interface IRepos {
  name: string;
  id: number;
  owner: IUser;
  description: string;
  html_url: string;
  topics: string[];
  pushed_at: string;
}

export interface UserProps {
  user: IUser;
  repos: IRepos[];
}
