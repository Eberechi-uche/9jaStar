import { useContext, createContext, useState } from "react";

export const userContext = createContext({
  role: "",
  setUserData: () => null,
});
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState("");
  const value = {
    userData,
    setUserData,
  };
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};
