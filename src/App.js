
import './App.css';
import KisKepek from './components/KisKepek';
import { kepLista } from './adat';
import NagyKep from './components/NagyKep';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        Képgaléria
      </header>
      <section>
        <NagyKep kep={kepLista[0]}/>
      </section>
      <section>
        <KisKepek kepLista={kepLista} />
      </section>
    </div>
  );
}

export default App;
