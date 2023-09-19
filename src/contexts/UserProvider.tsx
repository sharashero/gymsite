import { useState, useEffect, ReactNode } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import userContext, { IUser } from "./user";
import loadingContext from "./loading";


interface IUserProvider {
  children: ReactNode;
}


function UserProvider({
  children
}: IUserProvider)
{
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState<IUser | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), async user => {
      let userWithRole: IUser | null = null;

      if (user) {
        try {
          const { claims: { role } } = await user.getIdTokenResult();
          userWithRole = {
            ...user,
            role: role as string
          };
        } catch {/** */}
      }

      setValue(userWithRole);
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <userContext.Provider value={value}>
      <loadingContext.Provider value={isLoading}>
        {children}
      </loadingContext.Provider>
    </userContext.Provider>
  );
}


export default UserProvider;
