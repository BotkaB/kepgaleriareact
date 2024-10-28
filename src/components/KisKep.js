import React, { useContext } from "react";
import { KepContext } from "../context/KepContext";

// 'KisKep' komponens definiálása, amely egy prop-ot kap: 'kep'
export default function KisKep({ kep, index }) { // További index prop hozzáadása
  const { kepKivalaszt } = useContext(KepContext);

  return (
    <div className="col-md-3 col-sm-6 col-xs-12 mb-4">
      <div className="card" onClick={() => kepKivalaszt(index)}> {/* Helyesen meghívjuk a kepKivalaszt függvényt az indexszel */}
        <div className="card-body">
          <h3 className="kivalaszt card-title">
            <img src={kep.url} alt={kep.nev} />
          </h3>
          <p className="card-text">{kep.cim}</p>
          <p className="card-text">{kep.leiras}</p>
        </div>
      </div>
    </div>
  );
}

/*
Magyarázat:
- Az `index` prop hozzáadása biztosítja, hogy minden képhez tartozzon egy index.
- A `kepKivalaszt` függvény meghívásakor az indexet használjuk, hogy a helyes kép legyen kiválasztva.
*/
