import axios from "axios";

import { LoginType } from "../@types";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const postLoginData = async (loginData: LoginType | undefined) => {
  return api.post("/signin", loginData);
};
