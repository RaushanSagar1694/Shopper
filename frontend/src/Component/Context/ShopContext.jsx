


import React, { createContext } from "react";
import All from "../Data/all_product";


export const ShopContext = createContext(null);

const ShopContextProvider = (props) =>{

    const contextValue = {All};

    return (
        <ShopContext.Provider value={contextValue} >
            {props.children}
        </ShopContext.Provider>
    )
}


export default ShopContextProvider;