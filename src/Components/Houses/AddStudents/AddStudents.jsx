import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setStudentName, setSelectedHouse, setCountryName, resetForm, setStoredStudentData, hideMessage } from "../../../Students/StudentData/AddStudentSlice";

const AddStudents = () => {
    const { studentName, selectedHouse, countryName, storeStudentData, showMessage } = useSelector((state) => state.addWizards);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSelect = (e) => {
        dispatch(setSelectedHouse(e.target.value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(hideMessage());
        if (studentName || selectedHouse || countryName) {
            const newStudent = {
                character: studentName,
                hogwartsHouse: selectedHouse,
                nation: countryName
            };
            dispatch(setStoredStudentData(newStudent));
            dispatch(setStudentName(''));
            dispatch(setSelectedHouse(''));
            dispatch(setCountryName(''));
            navigate('/');
        } else {
            dispatch(resetForm());
        }
        console.log(storeStudentData);
    };

    const resetFormHandler = () => {
        dispatch(resetForm());
    }

    return (
        <div>
            <h1>Welcome To Hogwarts</h1>
            <h6>Please Enter Student Details</h6>
            {showMessage ? <p>You've been Rejected</p> : ''}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input id='studentName' type='text' value={studentName} onChange={(e) => dispatch(setStudentName(e.target.value))} />
                </div>
                <div>
                    <label htmlFor="house">House:</label>
                    <select value={selectedHouse} onChange={handleSelect}>
                        <option value="">--Select an House--</option>
                        <option value='Gryffindor'>Gryffindor</option>
                        <option value='Slytherin'>Slytherin</option>
                        <option value='Hufflepuff'>Hufflepuff</option>
                        <option value='Ravenclaw'>Ravenclaw</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="nationality">Nationality:</label>
                    <input id='country' type="text" value={countryName} onChange={(e) => dispatch(setCountryName(e.target.value))} />
                </div>
                <div>
                    <button type='reset' onClick={resetFormHandler}>Reject</button>
                    <button type='submit'>Send</button>
                </div>
            </form>
            {/* <div>
                {storeStudentData.map((student, index) => (
                    <p key={index}>{student.character}</p>
                ))}
            </div> */}
        </div>
    )
};

export default AddStudents;