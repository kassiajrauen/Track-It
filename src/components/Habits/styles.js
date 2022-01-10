import styled from 'styled-components';

const Container = styled.div`
  background-color: #e5e5e5;
  height: 100vh;
  width: 100vw;
  overflow: scroll;
  padding: 70px 0px;
  p {
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
    padding: 0px 15px;
  }
`;
const AddHabits = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 28px 15px;
  h1 {
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
  }
  button {
    display: flex;
    align-items: end;
    justify-content: center;
    border: none;
    width: 40px;
    height: 35px;
    background: #52b6ff;
    border-radius: 4.63636px;
    font-size: 27px;
    color: #ffffff;
  }
`;

export {
    Container,
    AddHabits,
}