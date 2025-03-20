import { createContext, useContext, useState } from 'react';

const FontSizeContext = createContext();

export function FontSizeProvider({ children }) {
  const [fontSize, setFontSize] = useState('medium');

  const value = {
    fontSize,
    setFontSize,
  };

  return (
    <FontSizeContext.Provider value={value}>
      {children}
    </FontSizeContext.Provider>
  );
}

export function useFontSize() {
  const context = useContext(FontSizeContext);
  if (context === undefined) {
    throw new Error('useFontSize must be used within a FontSizeProvider');
  }
  return context;
} 