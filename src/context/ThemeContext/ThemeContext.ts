import { createContext } from "react";

type ThemeContextType = {
  theme: "dark" | "light";
  toggleTheme: () => void;
};

const initialValues: ThemeContextType = {
  theme: "dark",
  toggleTheme: () => null,
};
const ThemeContext = createContext<ThemeContextType>(initialValues);

export default ThemeContext;
