import { createContext, useContext } from "react";

export const ThemContext = createContext({
    ThemMode: "dark",
    lightTheme: () => { },
    darkTheme: () => { }
});

export const ThemProvider = ThemContext.Provider;

export function useThem() {
    return useContext(ThemContext);
}
