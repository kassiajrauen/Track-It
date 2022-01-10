import { Link } from "react-router-dom";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #FFFFFF; 
    min-height: 100vh;
    box-sizing: border-box;

form{
    display: flex;
    flex-direction: column;
    margin-top: 25px
}

input{
    width: 303px;
    height: 45px;
    font-size: 20px;
    color: #DBDBDB;
    font-family: Lexend Deca;
    padding-left: 10px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    box-sizing: borderbox;
    margin-bottom: 5px;
}
input::placeholder {
    color: #DBDBDB;
}

button{
    width: 303px;
    height: 45px;
    font-size: 22px;
    font-family: Lexend Deca;
    background: #52B6FF;
    border-radius: 5px;
    border: 1px solid #52B6FF;
    color: #FFFFFF;
}
`;

const StyledLink = styled(Link)`
    heigth: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #52B6FF;
    font-size: 14px;
    font-weight: 400;
    margin-top: 25px;
`;

export {
    Container,
    StyledLink,
}