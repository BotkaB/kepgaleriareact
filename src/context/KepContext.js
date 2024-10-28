import { createContext, useState } from "react";
import { kepLista } from "../adat";

export const KepContext = createContext("");

export const KepProvider = ({ children }) => {
  const [index, setIndex] = useState(0);

  function bal() {
    let sv = index - 1;
    if (sv < 0) {
      sv = kepLista.length - 1; // Ha az index 0 alá megy, az utolsó képre ugrik
    }
    setIndex(sv);
  }

  function jobb() {
    let sv = index + 1;
    if (sv >= kepLista.length) {
      sv = 0; // Ha az index a lista végére ér, az első képre ugrik
    }
    setIndex(sv);
  }

  function kepKivalaszt(index) {
    setIndex(index);
  }

  return (
    <KepContext.Provider value={{ kepLista, index, jobb, bal, kepKivalaszt }}>
      {children}
    </KepContext.Provider>
  );
}

/*
Magyarázat:
- A `bal` függvény csökkenti az index értékét egyel. Ha az index 0 alá megy, az utolsó képre ugrik.
- A `jobb` függvény növeli az index értékét egyel. Ha az index a lista végére ér, az első képre ugrik.
- A `kepKivalaszt` függvény beállítja az aktuális indexet a kiválasztott kép indexére.
*/
