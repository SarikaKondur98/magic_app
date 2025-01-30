import { NavLink } from "react-router-dom";

const Yellow = ({ wizards, storeStudentData }) => {
    return (
        <div>
            <NavLink to='/'>Great Hall</NavLink>
            <h1>Welcome to Hufflepuff Common Room !!</h1>
            {wizards.map((wiz) => wiz.hogwartsHouse === 'Hufflepuff' ? <p key={wiz.id}>{wiz.character}</p> : '')}
            {storeStudentData.map((student, index) => student.hogwartsHouse === 'Hufflepuff' ? <p key={index}>{student.character}</p> : '')}
        </div>
    )
};

export default Yellow;