import React from "react";


export default function NagyKep({kep}){

    return(

    <div>
        <button> bal </button>
       
      
        <img src={kep.url} alt={kep.nev} />       
           
        <button > jobb </button>


    </div>
)
}