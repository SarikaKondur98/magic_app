import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

function GryffindorRedirect() {
    const navigate = useNavigate();
    const routeToGryffindor = () => {
        navigate('/gryffindor');
    };
    return <button onClick={routeToGryffindor}>Gryfindor</button>
}

function SlytherinRedirect() {
    const navigate = useNavigate();
    const routeToSlytherin = () => {
        navigate('/slytherin');
    };
    return <button onClick={routeToSlytherin}>Slytherin</button>

}

function RavenclawRedirect() {
    const navigate = useNavigate();
    const routeToRavenclaw = () => {
        navigate('/ravenclaw');
    }
    return <button onClick={routeToRavenclaw}>Ravenclaw</button>
}

function HufflepuffRedirect() {
    const navigate = useNavigate();
    const routeToHufflepuff = () => {
        navigate('/hufflepuff');
    };
    return <button onClick={routeToHufflepuff}>Hufflepuff</button>
}

function AddStudentsToSchool() {
    const navigate = useNavigate();
    const routeToAddStudentsPage = () => {
        navigate('/addStudents');
    }
    return <button onClick={routeToAddStudentsPage}>Send Invites</button>
}

const GreatHall = ({ wizards }) => {
    const storeStudentData = useSelector((state) => state.addWizards.storeStudentData);
    return (
        <div>
            <h1>Welcome to sorting Cermony</h1>
            <AddStudentsToSchool />
            <p>In Few minutes you will be sorted into your own houses and go to your respective common rooms</p>
            <GryffindorRedirect />
            <HufflepuffRedirect />
            <RavenclawRedirect />
            <SlytherinRedirect />
            {wizards.map((wiz) => (
                <p key={wiz.id}>{wiz.character}</p>
            ))}
            <div>
                {storeStudentData.map((student, index) => (
                    <p key={index}>{student.character}</p>
                ))}
            </div>
        </div>
    )
}

export default GreatHall;