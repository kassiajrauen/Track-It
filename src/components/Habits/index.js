import axios from "axios";
import Footer from "../Footer/index";
import Header from "../Header/index";
import CreatedHabits from "../CreateHabits/index";
import NewHabits from "../NewHabits/index";
import { useState, useEffect } from "react";
import { Container, AddHabits, } from './styles';

function Habits() {
  const [habits, setHabits] = useState([]);
  const [handleHabits, setHandleHabits] = useState(true);
  const [update, setUpdate] = useState("");

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
    );
    promise.then((response) => setHabits(response.data));
    promise.catch((error) => console.log(error.response));
  }, [handleHabits, update]);

  return (
    <Container>
      <Header />
      <AddHabits>
        <h1>Meus hábitos</h1>
        <button onClick={() => setHandleHabits(false)}>+</button>
      </AddHabits>
      {handleHabits ? "" : <NewHabits setHandleHabits={setHandleHabits} />}
      {habits.length === 0 ? (
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      ) : (
        habits.map((habit) => (
          <CreatedHabits key={habit.id} {...habit} setUpdate={setUpdate} />
        ))
      )}
      <Footer />
    </Container>
  );
}

export default Habits;