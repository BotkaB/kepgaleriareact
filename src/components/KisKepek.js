import React from "react";
import KisKep from "./KisKep";

// 'KisKepek' komponens definiálása
export default function KisKepek({ kepLista }) {
  return (
    <div className="container"> {/* Konténer az elrendezéshez */}
      <div className="row"> {/* Bootstrap rács rendszerének használata */}
        {kepLista.map((kep, index) => (
          <KisKep kep={kep} index={index} key={index} /> // További index prop átadása
        ))}
      </div>
    </div>
  );
}

/*
Magyarázat:
- A `kepLista.map` metódussal végigmegyünk a képek listáján.
- Minden képhez hozzárendelünk egy indexet, amelyet prop-ként továbbítunk a `KisKep` komponensnek.
*/

