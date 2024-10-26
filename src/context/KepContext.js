

import { createContext, useState } from "react";
import { kepLista } from "../adat";

export const KepContext = createContext("");
export const KepProvider = ({ children }) => {

    const [index, setIndex] = useState(0);

    function bal() {
        /*index értékét egyel csökkentjük*/
        let sv = index -1
        if (sv <= kepLista.length) {
            sv = kepLista.length
        }
        setIndex(sv)

    }
    function jobb() {
        /*index értékét egyel növeljük*/
        let sv = index + 1
        if (sv >= kepLista.length) {
            sv = 0
        }
        setIndex(sv)

    }

    function kepKivalaszt(id) {
        setIndex(id)
    }
    return (<KepContext.Provider value={{ kepLista, index, jobb, bal, kepKivalaszt }} >

        { children }
    </KepContext.Provider >

    )
}