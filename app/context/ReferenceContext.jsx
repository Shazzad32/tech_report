"use client";
import { createContext, useContext, useState, useEffect } from "react";

const ReferenceContext = createContext();

export const ReferenceProvider = ({ children }) => {
  const [reference, setReference] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("userReference");
    if (saved) setReference(saved);
  }, []);

  const saveReference = (ref) => {
    setReference(ref);
    localStorage.setItem("userReference", ref);
  };

  const logout = () => {
    setReference(null);
    localStorage.removeItem("userReference");
  };

  return (
    <ReferenceContext.Provider value={{ reference, saveReference, logout }}>
      {children}
    </ReferenceContext.Provider>
  );
};

export const useReference = () => useContext(ReferenceContext);
