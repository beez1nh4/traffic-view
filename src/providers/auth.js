import React, { useState } from "react";
import { createContext } from 'react';
import formatMatrix from "../functions/formatMatrix";
export const AuthContext = createContext({});

export const AuthProvider = (props) => {
const [matrix, setMatrix] = useState(formatMatrix(9))
const [auxVector, setAuxVector] = useState([])
const [paths, setPaths] = useState([])
  return (
    <AuthContext.Provider value={
      {matrix, 
      setMatrix,
      auxVector,
      setAuxVector,
      paths,
      setPaths
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);