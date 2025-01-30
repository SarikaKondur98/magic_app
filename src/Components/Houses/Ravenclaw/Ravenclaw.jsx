import { NavLink } from "react-router-dom";

const Blue = ({ wizards, storeStudentData }) => {
    return (
        <div>
            <NavLink to='/'>Great Hall</NavLink>
            <h1>Welcome to RavenClaw common Room !!</h1>
            {wizards.map((wiz) => wiz.hogwartsHouse === 'Ravenclaw' ? <p key={wiz.id}>{wiz.character}</p> : '')}
            {storeStudentData.map((student, index) => student.hogwartsHouse === 'Ravenclaw' ? <p key={index}>{student.character}</p> : '')}
        </div>
    )
};

export default Blue;