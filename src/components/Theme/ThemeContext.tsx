import React, { createContext, useState, useContext } from "react";

const themes = {
    light: {
        background: "#fff",
        text: "#0a0d0a",
        color_badge: '#ee0004',
        color_dot: '#f60013',
        borderMainTap: '#f1f1f1',
        buttonBackground: "#007bff",

    },
    dark: {
        background: "#0a0d0a",
        text: "#f7f7f7",
        color_badge: '#ee0004',
        color_dot: '#f60013',
        borderMainTap: '#202020',
        buttonBackground: "#444444",
    },
};

const ThemeContext = createContext<any>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState(themes.dark);

    const toggleTheme = () => {
        setTheme((prevTheme) =>
            prevTheme === themes.light ? themes.dark : themes.light
        );
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
