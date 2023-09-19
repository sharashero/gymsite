import { useContext, createContext } from "react";
import { User } from "firebase/auth";


export interface IUser extends User {
  role: string;
}


const userContext = createContext<IUser | null>(null);


export function useUser() {
  return useContext(userContext);
}


export default userContext;
