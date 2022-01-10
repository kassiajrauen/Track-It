import axios from "axios";
import Footer from "../Footer/index";
import Header from "../Header/index";
import Item from "../Item/index";
import { Container } from './styles';
import { useState, useEffect, useContext } from "react";
import HabitsCheckGlobal from "../../global/HabitsCheckGlobal";
import dayjs from "dayjs";
require("dayjs/locale/pt-br");

function Today() {
    const [items, setItems] = useState([]);
    const [update, setUpdate] = useState([]);
    const { habitsCheck, setHabitsCheck } = useContext(HabitsCheckGlobal);
    const [cont, setCont] = useState(0);

    useEffect(() => {
        const promise = axios.get(
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
        );

        promise.then((response) => {
            setItems(response.data);
            let newCont = 0;
            response.data.forEach((item) => item.done && (newCont += 1));
            setCont(newCont);
            setHabitsCheck((newCont / response.data.length) * 100);
        });

        promise.catch((error) => console.log(error.response));
    }, [update]);

    return (
        <Container cont={cont}>
            <Header />
            <h1>
                {dayjs().locale("pt-br").format("dddd")}, {dayjs().format("DD/MM")}
            </h1>
            <h2>
                {cont > 0
                    ? habitsCheck.toFixed(0) + "% dos habitos concluidos"
                    : "Nenhum hábito concluído ainda"}
            </h2>
            {items.length === 0
                ? ""
                : items.map((item) => (
                    <Item key={item.id} {...item} setUpdate={setUpdate} />
                ))}
            <Footer />
        </Container>
    );
}

export default Today;