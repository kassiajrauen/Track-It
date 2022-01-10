import { useContext } from "react";
import { Container, Profile } from './styles';

import UserGlobal from "../../global/UserGlobal";

function Header() {

  const { user } = useContext(UserGlobal);

  console.log(user, "aqui")
  return (
    <Container>
      <img src="../../assets/trackit.png" alt="trackit" />
      <Profile src={user} alt=""></Profile>
    </Container>
  );
}

export default Header;