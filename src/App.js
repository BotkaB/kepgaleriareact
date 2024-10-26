
import { useContext } from 'react';
import './App.css';
import KisKepek from './components/KisKepek';

import NagyKep from './components/NagyKep';
import { KepContext } from './context/KepContext';



function App() {
  const {kepLista, index}=useContext(KepContext) 
  return (
    <div className="App">
      <header className="App-header">
        Képgaléria
      </header>
      <section>
        <NagyKep kep={kepLista[index]}/>
      </section>
      <section>
        <KisKepek kepLista={kepLista} />
      </section>
    </div>
  );
}

export default App;
