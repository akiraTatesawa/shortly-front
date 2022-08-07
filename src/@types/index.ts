export type LoginType = {
  email?: string;
  password?: string;
};

export type SignUpType = {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

export type Url = {
  url: string;
};

export interface APIUserUrlData {
  id?: number;
  url: string;
  shortUrl: string;
  visitCount: number;
}

export interface APIUserData {
  id: number;
  name: string;
  visitedCount: number;
  shortenedUrls: APIUserUrlData[];
}

export interface APIRanking {
  id?: number;
  name: string;
  linksCount: string;
  visitCount: string;
}

export interface RankingData {
  map(arg0: (e: APIRanking, index: number) => void): import("react").ReactNode;
  rankingData: APIRanking[];
}

export interface Config {
  headers: {
    authorization: string;
  };
}

export interface UserData {
  name?: string | undefined;
  token?: string | undefined;
}

export type UserDataContextType = {
  userData: UserData | null | undefined;
  setData: (userData: UserData) => void;
};
