import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from "react";

import { Container, DownButton } from './styles';
import HabitsCheckGlobal from "../../global/HabitsCheckGlobal";

function Footer() {

    const { habitsCheck } = useContext(HabitsCheckGlobal)
    return (
        <Container>
            <Link to="/habitos">
                <p>Hábitos</p>
            </Link>
            <Link to="/hoje">
                <DownButton>
                    <CircularProgressbar
                        value={habitsCheck}
                        text={'Hoje'}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "#52B6FF",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent"
                        })}
                    />
                </DownButton>
            </Link>
            <Link to="/historico">
                <p>Histórico</p>
            </Link>
        </Container>
    );
}

export default Footer;