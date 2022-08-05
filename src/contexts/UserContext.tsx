/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState } from "react";

import { UserData, UserDataContextType } from "../@types";

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserContext = createContext<UserDataContextType | null>(null);

export function UserProvider({ children }: UserProviderProps) {
  const [userData, setUserData] = useState<UserData>({
    name: undefined,
    token: undefined,
  });
  return (
    <UserContext.Provider value={{ userData, setData: setUserData }}>
      {children}
    </UserContext.Provider>
  );
}
