import React, { useState, useEffect, useContext } from "react";
import auth, { onAuthStateChanged } from "./Firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user)
        console.log(currentUser)
      } else console.log("no user available");
    })
  }, []);


  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export function useAuthValue(){
  return useContext(AuthContext)
}
