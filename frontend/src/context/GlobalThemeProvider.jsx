import { createContext, useState } from "react";

export const GlobalThemeContext = createContext();

const GlobalThemeProvider = ({children}) =>{
    const [theme, setTheme] = useState('light');

    const toggleTheme = () =>{
        setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light');
    }

    return (
        <GlobalThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </GlobalThemeContext.Provider>
    )

}

export default GlobalThemeProvider;