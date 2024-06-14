import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useLocalStorage } from "./useLocalStorage";
import { ILoginDetails } from "../Types/AuthType";

export const useUser = () => {
  const { user, setUser } = useContext(AuthContext);
  const { setItem } = useLocalStorage();

  const addUser = (user: ILoginDetails) => {
    debugger
    setUser(user);
    setItem("user", JSON.stringify(user));
  };

  const removeUser = () => {
    setUser(null);
    setItem("user", "");
  };

  return { user, addUser, removeUser, setUser };
};