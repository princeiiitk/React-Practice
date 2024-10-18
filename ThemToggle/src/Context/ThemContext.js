import React, { useContext } from "react";

export const themcontext = React.createContext({
    them: "dark",
    light: () => { },
    dark:()=>{}
})

export const Themprovider = themcontext.Provider;

export default function useThem() {
    return useContext(themcontext)
}

