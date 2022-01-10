import styled from "styled-components";

const Container = styled.div`
  background-color: #e5e5e5;
  height: 100vh;
  width: 100vw;
  overflow: scroll;
  padding: 70px 0px;
  
  h1 {
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
    padding: 28px 0px 0px 15px;
  }

  h2 {
    font-size: 17.976px;
    line-height: 22px;
    color: ${(props) => (props.cont > 0 ? "#8FC549" : "#bababa")};
    padding: 0px 0px 28px 15px;
  }
`;

export {
  Container
}