import { useEffect } from 'react';
import GreatHall from './Components/GreatHall/GreatHall';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchStudentData } from '../src/Students/StudentData/StudentDataSlice';
import Red from "../src/Components/Houses/Gryffindor/Gryffindor";
import Green from "../src/Components/Houses/Slytherin/Slytherin";
import Yellow from "../src/Components/Houses/Hufflepuff/Hufflepuff";
import Blue from "../src/Components/Houses/Ravenclaw/Ravenclaw";
import AddStudents from '../src/Components/Houses/AddStudents/AddStudents';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { wizards, status, error } = useSelector((state) => state.wizards);
  const storeStudentData = useSelector((state) => state.addWizards.storeStudentData);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchStudentData())
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  };

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<GreatHall wizards={wizards} />}></Route>
        <Route path="/gryffindor" element={<Red wizards={wizards} storeStudentData={storeStudentData}/>}></Route>
        <Route path="/slytherin" element={<Green wizards={wizards} storeStudentData={storeStudentData}/>}></Route>
        <Route path="/hufflepuff" element={<Yellow wizards={wizards} storeStudentData={storeStudentData}/>}></Route>
        <Route path="/ravenclaw" element={<Blue wizards={wizards} storeStudentData={storeStudentData}/>}></Route>
        <Route path="/addStudents" element={<AddStudents/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
