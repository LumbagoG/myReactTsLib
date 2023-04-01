// Library's
import { useEffect, useState } from "react";

// Utils
import { storage } from "@lib/utils";

// Type theme modes
type TModeTheme = "light" | "dark";

/**
 * Hook for toggle theme
 * @constructor
 */
export const useThemeMode = () => {
    // State theme
    const [theme, setTheme] = useState<TModeTheme>("dark");

    /**
     * Setting mode theme
     */
    const setMode = (mode: TModeTheme) => {
        storage.set<TModeTheme>("theme", mode);
        setTheme(mode);
    };

    /**
     * Toggle mode theme
     */
    const themeToggle = () => (theme === "dark" ? setMode("light") : setMode("dark"));

    useEffect(() => {
        const localTheme = storage.get<TModeTheme>("theme");
        localTheme && setTheme(localTheme);
    }, []);

    return { theme, themeToggle };
};
