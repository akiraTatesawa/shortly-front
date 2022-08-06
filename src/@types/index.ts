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

export interface UserData {
  name: string | undefined;
  token: string | undefined;
}

export type UserDataContextType = {
  userData: UserData | null;
  setData: (userData: UserData) => void;
};
