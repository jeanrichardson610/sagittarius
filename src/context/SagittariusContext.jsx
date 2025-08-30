import React, { createContext, useContext } from 'react';
import { askGemini } from '../api/sagittarius';

const GeminiContext = createContext();

export const useGemini = () => useContext(GeminiContext);

export const GeminiProvider = ({ children }) => {
  const sendPrompt = async (prompt) => {
    const result = await askGemini(prompt);
    return result;
  };

  return (
    <GeminiContext.Provider value={{ sendPrompt }}>
      {children}
    </GeminiContext.Provider>
  );
};
