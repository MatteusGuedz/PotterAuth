import React , { createContext} from 'react';

export const AuthContext = createContext();


export default function AuthProvider({children}){
  return(
    <AuthContext.Provider>
      {children}
    </AuthContext.Provider>
  )
}