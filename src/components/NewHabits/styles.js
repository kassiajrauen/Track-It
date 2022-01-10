import styled from 'styled-components';

const Container = styled.div`
  background-color: #ffffff;
  height: 180px;
  margin: 0px 15px;
  padding: 18px;
  border-radius: 5px;
  font-size: 19.976px;
  line-height: 25px;
  color: #666666;
  margin-bottom: 29px;
  form {
    display: flex;
    flex-direction: column;
  }
  input {
    height: 45px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 19.976px;
    line-height: 25px;
    color: #dbdbdb;
  }
`;

const Days = styled.div`
  margin-top: 8px;
  margin-bottom: 29px;
  display: flex;
  gap: 4px;
`;

const Day = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: ${({ selected, id }) =>
        selected.includes(id) ? "#cfcfcf" : "#ffffff"};
  color: ${({ selected, id }) =>
        selected.includes(id) ? "#ffffff" : "#cfcfcf"};
  border: 1px solid #d5d5d5;
  box-sizing: border-box;
  border-radius: 5px;
`;

const Buttons = styled.div`
  margin-left: 160px;
  .cancel {
    border: none;
    width: 84px;
    height: 35px;
    background: #ffffff;
    border-radius: 4.63636px;
    color: #52b6ff;
    font-size: 16px;
    margin-right: 20px;
  }
  .save {
    border: none;
    width: 84px;
    height: 35px;
    background: #52b6ff;
    border-radius: 4.63636px;
    color: #ffffff;
    font-size: 16px;
  }
`;

export {
    Container,
    Days,
    Day,
    Buttons,
}