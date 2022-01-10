import styled from "styled-components";

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  height: 94px;
  margin: 0px 15px 10px 15px;
  padding: 13px;
  border-radius: 5px;
  div {
    display: flex;
    flex-direction: column;
  }
  h3 {
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    margin-bottom: 7px;
  }
  p {
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
  }
  span{
    color: ${(props) => props.currentSequence === props.highestSequence && props.currentSequence > 0 ? "#8FC549" : "#666666"};
  }
  .atual{
    color: ${(props) => props.done ? "#8FC549" : "#666666"}
  }
`;

const Check = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 69px;
  height: 69px;
  background-color: ${(props) => props.check.includes(props.id) || props.done === true ? "#8FC549" : "#ebebeb"};
  border: 1px solid #e7e7e7;
  box-sizing: border-box;
  border-radius: 5px;
  img {
    width: 37px;
    height: 32px;
  }
`;

export {
    Box,
    Check,
}