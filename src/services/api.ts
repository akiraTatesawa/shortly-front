import axios from "axios";

import { LoginType, SignUpType } from "../@types";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const postLoginData = async (loginData: LoginType | undefined) => {
  return api.post("/signin", loginData);
};

export const postSignUpData = async (signUpData: SignUpType | undefined) => {
  return api.post("/signup", signUpData);
};

export const getRanking = async () => {
  return api.get("/ranking");
};
