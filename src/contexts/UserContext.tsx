/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserData, UserDataContextType } from "../@types";
import { getUserDataFromLocalStorage } from "../utils";

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserContext = createContext<UserDataContextType | null>(null);

export function UserProvider({ children }: UserProviderProps) {
  const [userData, setUserData] = useState<UserData>({
    name: undefined,
    token: undefined,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const localStorageUserData = getUserDataFromLocalStorage();

    if (localStorageUserData) {
      setUserData({
        name: localStorageUserData.name,
        token: localStorageUserData.token,
      });
    } else {
      navigate("/ranking");
    }
  }, []);

  return (
    <UserContext.Provider value={{ userData, setData: setUserData }}>
      {children}
    </UserContext.Provider>
  );
}
