import React, { useContext } from "react";
import { KepContext } from "../context/KepContext";

// 'NagyKep' komponens definiálása, amely egy prop-ot kap: 'kep'
export default function NagyKep({kep}) {
  const {jobb, bal} = useContext(KepContext);
  return (
    <div className="nagy-kep"> {/* Hozzáadunk egy osztályt a szülőelemhez */}
      <button onClick={() => bal()}>bal</button>
      <img src={kep.url} alt={kep.nev} />
      <button onClick={() => jobb()}>jobb</button>
    </div>
  );
}
