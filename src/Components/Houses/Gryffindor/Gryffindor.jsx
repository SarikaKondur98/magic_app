import { NavLink } from "react-router-dom";

const Red = ({ wizards, storeStudentData }) => {
    return (
        <div>
            <NavLink to='/'>Great Hall</NavLink>
            <h1>Welcome to Gryffindor Common House !!</h1>
            {wizards.map((wiz) => wiz.hogwartsHouse === 'Gryffindor' ? <p key={wiz.id}>{wiz.character}</p> : '')}
            {storeStudentData.map((student, index) => student.hogwartsHouse === 'Gryffindor' ? <p key={index}>{student.character}</p> : '')}
        </div>
    )
};

export default Red;