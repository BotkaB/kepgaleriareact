

import { createContext } from "react";
import { kepLista } from "../adat";

export const KepContext=createContext("");
export const KepProvider=({children})=>{
  
    let index=0
    function bal(){
        
    }
    return(<KepContext.Provider value={{kepLista, index}}>

        {children}
    </KepContext.Provider>

    )
}