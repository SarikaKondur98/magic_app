import { NavLink } from "react-router-dom";

const Green = ({ wizards, storeStudentData }) => {
    return (
        <div>
            <NavLink to='/'>Great Hall</NavLink>
            <h1>Welcome to Slytherin common Room !!</h1>
            {wizards.map((wiz) => wiz.hogwartsHouse === 'Slytherin' ? <p key={wiz.id}>{wiz.character}</p> : '')}
            {storeStudentData.map((student, index) => student.hogwartsHouse === 'Slytherin' ? <p key={index}>{student.character}</p> : '')}
        </div>
    )
};

export default Green;