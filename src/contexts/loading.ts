import { useContext, createContext } from "react";


const loadingContext = createContext(true);


export function useLoading() {
  return useContext(loadingContext);
}


export default loadingContext;
