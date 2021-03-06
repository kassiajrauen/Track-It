import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: #126ba5;
  height: 70px;
  width: 100vw;
  padding-left: 15px;
  padding-right: 15px;
`;

const Profile = styled.img`
  width: 51px;
  height: 51px;
  left: 306px;
  top: 9px;
  background-color: white;
  border-radius: 98.5px;
`;

export {
    Container,
    Profile,
}