"use client";
import { createContext, useContext } from "react";

interface AppContext {}

interface AppProvider {
  children: React.ReactNode;
}

export const AppContext = createContext<AppContext>({} as AppContext);

export const AppProvider = ({ children }: AppProvider) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
