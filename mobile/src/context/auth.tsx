import React, { useEffect, useState } from "react";

interface AuthProps {
  children: React.ReactNode;
}

export interface SignedProps {
  signed: boolean;
  setSigned: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultState = {
  signed: false,
  setSigned: () => {},
};

export const AuthContext = React.createContext<SignedProps>(defaultState);

export const AuthProvider = ({ children }: AuthProps) => {
  const [signed, setSigned] = useState(defaultState.signed);

  return (
    <AuthContext.Provider value={{ signed, setSigned }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
