import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  bottom: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: #ffffff;
  height: 70px;
  width: 100vw;
  padding-left: 15px;
  padding-right: 15px;
  p {
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52b6ff;
  }
`;

const CircularButton = styled.div`
  position:absolute;
  width: 90px;
  height:90px;
  bottom:0px;
  margin-left: -40px;
`;

export {
    Container,
    CircularButton,
}