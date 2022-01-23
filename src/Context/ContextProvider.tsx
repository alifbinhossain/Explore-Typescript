import { createContext } from "react";
import theme from "./Theme";

export const ThemeContext = createContext(theme);

type ContextProviderProps = {
  children: React.ReactNode;
};

const ThemeContextProvider = ({ children }: ContextProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
