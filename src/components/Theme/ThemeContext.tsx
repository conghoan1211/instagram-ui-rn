import React, { createContext, useState, useContext } from "react";

const themes = {
    light: {
        background: "#fff",
        text: "#000000",
        buttonBackground: "#007bff",
        buttonText: "#ffffff",
        color_badge: '#ee0004',
        color_dot: '#f60013',

    },
    dark: {
        background: "#000000",
        text: "#f7f7f7",
        buttonBackground: "#444444",
        buttonText: "#ffffff",
        color_badge: '#ee0004',
        color_dot: '#f60013',
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
