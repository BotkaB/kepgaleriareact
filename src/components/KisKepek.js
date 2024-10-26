import React from "react";

import KisKep from "./KisKep";

export default function KisKepek(props){
    console.log(props.KepLista)
    return(
        <div className="container"> {/* Konténer az elrendezéshez */}
        <div className="row"> {/* Bootstrap rács rendszerének használata */}
          {props.kepLista.map((kep, index) => {
            return (<KisKep kep={kep}  key={index} />)
         
               
          
            
})}
        </div>
      </div>

    )
}