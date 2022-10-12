import { createContext, useEffect, useState } from "react";
import { storageHelper } from "../utils/localStorageService/storageHelper";

export const favoritesCustomerContext = createContext(null);


export const FavoritesCustomerProvider = ({ children }) => {

    //Global state
    const [favorites, setfavorites] = useState([]);

    useEffect(() => {

        var favorites = storageHelper.getFavoritesFromStorage();
        if (favorites)
            setfavorites([...favorites]);

    }, [])


    const values = {
        favorites,
        setfavorites
    }



    return <favoritesCustomerContext.Provider value={values}>{children}</favoritesCustomerContext.Provider>

}