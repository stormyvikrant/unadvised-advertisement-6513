import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
   const [isAuth, setIsAuth] = useState(false);

   const ToggleAuth = () => {
      setIsAuth(!isAuth);
   };

   return (
      <AuthContext.Provider value={{ isAuth, ToggleAuth }}>
         {children}
      </AuthContext.Provider>
   );
};