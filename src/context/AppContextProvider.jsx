import { useState, useEffect } from "react";
import { AppContext } from "./AppContext.js"  // import from separate file
import { fetchCategories } from "../Service/CategoryService.js";
import {fetchItems} from "../Service/ItemService.js";

export const AppContextProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [itemsData, setItemsData] = useState(false);
    const [auth,setAuth] = useState({token:null, role:null});

    useEffect(() => {
        async function loadData() {
            const response = await fetchCategories();
            const itemResponse=await fetchItems();
            setCategories(response.data);
            setItemsData(itemResponse.data);
        }
        loadData();
    }, []);

    const contextValue = {
        categories,
        setCategories,
        auth,
        setAuthData,
        itemsData,
        setItemsData,
    };

    const setAuthData = (token,role) => {
        setAuth({token,role});
    }

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};
