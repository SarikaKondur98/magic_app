import react, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { fetchStudentData } from '../../Students/StudentData/StudentDataSlice'

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

const GreatHall = () => {
    const dispatch = useDispatch();
    const { wizards, status, error } = useSelector((state) => state.wizards);

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
        <div>
            <h1>Welcome to sorting Cermony</h1>
            <p>In Few minutes you will be sorted into your own houses and go to your respective common rooms</p>
            <GryffindorRedirect />
            <HufflepuffRedirect />
            <RavenclawRedirect />
            <SlytherinRedirect />
            {wizards.map((wiz) => (
                <p key={wiz.id}>{wiz.character}</p>
            ))}
        </div>
    )
}

export default GreatHall;