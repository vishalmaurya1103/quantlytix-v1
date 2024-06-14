import { createContext } from "react";
import { ILoginDetails } from "../Types/AuthType";

interface AuthContext {
  user: ILoginDetails | null;
  setUser: (user: ILoginDetails | null) => void;
}

export const AuthContext = createContext<AuthContext>({
  user: null,
  setUser: () => {
    
  },
});