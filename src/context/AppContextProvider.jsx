import { useState, useEffect } from "react";
import { AppContext } from "./AppContext.js"  // import from separate file
import { fetchCategories } from "../Service/CategoryService.js";

export const AppContextProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function loadData() {
            const response = await fetchCategories();
            setCategories(response.data);
        }
        loadData();
    }, []);

    const contextValue = {
        categories,
        setCategories,
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};
