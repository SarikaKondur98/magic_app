import GreatHall from './Components/GreatHall/GreatHall';
import { Routes, Route } from 'react-router-dom';
import Red from "../src/Components/Houses/Gryffindor/Gryffindor";
import Green from "../src/Components/Houses/Slytherin/Slytherin"
import Yellow from "../src/Components/Houses/Hufflepuff/Hufflepuff"
import Blue from "../src/Components/Houses/Ravenclaw/Ravenclaw"
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<GreatHall />}></Route>
        <Route path="/gryffindor" element={<Red />}></Route>
        <Route path="/slytherin" element={<Green />}></Route>
        <Route path="/hufflepuff" element={<Yellow />}></Route>
        <Route path="/ravenclaw" element={<Blue />}></Route>
      </Routes>
    </div>
  );
}

export default App;
