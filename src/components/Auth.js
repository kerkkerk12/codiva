import React, { useState, useEffect, useContext } from "react";
import auth, { onAuthStateChanged } from "./Firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  console.log(currentUser);
  useEffect( () => {
    
    if (!currentUser){
      onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
        console.log(currentUser);
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
