import axios from "axios";
import { useState } from "react";
import { Box, Check } from './styles';

function Item(props) {
  const [checked, setChecked] = useState([])

  function handleCheck() {
    if (props.done === false) {
      setChecked([...checked, props.id])
      const promise = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.id}/check`,
        {},
      );

      promise.then((response) => props.setUpdate(response));
      promise.catch((error) => console.log(error.response));
    } else {
      setChecked(checked.filter((item) => item !== props.id))
      const promise = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.id}/uncheck`,
        {},
      );

      promise.then((response) => props.setUpdate(response));
      promise.catch((error) => console.log(error.response));
    }
  }

  return (
    <Box highestSequence={props.highestSequence} currentSequence={props.currentSequence} done={props.done}>
      <div>
        <h3>{props.name}</h3>
        <p>Sequência atual: <span className="atual" >{props.currentSequence} dias</span></p>
        <p>Seu recorde: <span>{props.highestSequence} dias</span></p>
      </div>
      <Check id={props.id} done={props.done} check={checked} onClick={handleCheck}>
        <img src="../assets/Vector.svg" alt="" />
      </Check>
    </Box>
  );
}

export default Item;