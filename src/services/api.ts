import axios from "axios";

import { Config, LoginType, SignUpType, Url } from "../@types";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

// Auth
export const postLoginData = async (loginData: LoginType | undefined) => {
  return api.post("/signin", loginData);
};

export const postSignUpData = async (signUpData: SignUpType | undefined) => {
  return api.post("/signup", signUpData);
};

// Ranking
export const getRanking = async () => {
  return api.get("/ranking");
};

// Urls
export const getUserDataLinks = async (config: Config) => {
  return api.get("/users/me", config);
};

export const postNewUrl = async (url: Url, config: Config) => {
  return api.post("/urls/shorten", url, config);
};

export const deleteUrl = async (urlId: number, config: Config) => {
  return api.delete(`/urls/${urlId}`, config);
};
