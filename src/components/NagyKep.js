import React, { useContext } from "react";
import { KepContext } from "../context/KepContext";


export default function NagyKep({kep}){
const {jobb,bal}=useContext(KepContext)

    return(

    <div>
        <button onClick={()=>{bal()}}> bal </button>
       
      
        <img src={kep.url} alt={kep.nev} />       
           
        <button onClick={()=>{jobb()}}> jobb </button>


    </div>
)
}