import axios from "axios";
import { useState, useContext } from "react";
import { Container, Days, Day, Buttons, } from './styles';
import TokenGlobal from "../../global/TokenGlobal";

function NewHabits({ setHandleHabits }) {
    const [name, setName] = useState("");
    const [days, setDays] = useState([]);
    const { token } = useContext(TokenGlobal);

    const objectDays = [
        { name: "D", id: 0 },
        { name: "S", id: 1 },
        { name: "T", id: 2 },
        { name: "Q", id: 3 },
        { name: "Q", id: 4 },
        { name: "S", id: 5 },
        { name: "S", id: 6 },
    ];

    function sendHabit(e) {
        e.preventDefault();
        const promise = axios.post(
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
            {
                name: name, days: days,
            },
            { headers: { Authorization: `Bearer ${token}`, }, }
        );
        promise.then(() => {
            setHandleHabits(true);
        });
        promise.catch((error) => {
            console.log(error.response);
        });
    }

    function selectDay(props) {
        if (days.includes(props.id)) {
            const daysFilter = days.filter((item) => item !== props.id);
            setDays(daysFilter);
            return;
        }
        setDays([...days, props.id]);
    }

    return (
        <Container>
            <form onSubmit={sendHabit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="nome do hábito" required />
                <Days>
                    {objectDays.map((item) => (
                        <Day selected={days} key={item.id} id={item.id} onClick={() => selectDay(item)}>{item.name}</Day>
                    ))}
                </Days>
                <Buttons>
                    <button type="button" className="cancel" onClick={() => setHandleHabits(true)}>Cancelar</button>
                    <button className="save">Salvar</button>
                </Buttons>
            </form>
        </Container>
    );
}

export default NewHabits;