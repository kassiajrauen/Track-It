import axios from "axios";
import { HabitsBox, Days, Day, } from './styles';

function CreatedHabits(props) {
    const days = props.days;
    const objectDays = [
        { name: "D", id: "0" },
        { name: "S", id: "1" },
        { name: "T", id: "2" },
        { name: "Q", id: "3" },
        { name: "Q", id: "4" },
        { name: "S", id: "5" },
        { name: "S", id: "6" },
    ];

    function deleteHabit() {
        if (window.confirm("Excluir o habito: " + props.name + "?") === true) {
            const promise = axios.delete(
                `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.id}`,
            );
            promise.then((response) => props.setUpdate(response));
            promise.catch((error) => console.log(error.response));
        }
    }

    return (
        <HabitsBox>
            <div className="head">
                <h1>{props.name}</h1>
                <ion-icon onClick={deleteHabit} name="trash-outline"></ion-icon>
            </div>
            <Days>
                {objectDays.map((item) => (
                    <Day key={item.id} selectedDays={days} id={item.id}>
                        {item.name}
                    </Day>
                ))}
            </Days>
        </HabitsBox>
    );
}

export default CreatedHabits;