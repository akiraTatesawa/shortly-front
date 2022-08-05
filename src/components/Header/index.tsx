import { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../contexts/UserContext";
import { Container, LoginSignUpLinks, ShortlyLogo, ShortsIcon } from "./styles";

export default function Header() {
  const userContext = useContext(UserContext);

  return (
    <Container>
      <LoginSignUpLinks>
        {userContext?.userData?.name}
        <Link to="/sign-in">Entrar</Link>
        <Link to="/sign-up">Cadastrar-se</Link>
      </LoginSignUpLinks>

      <ShortlyLogo>
        <h1>Shortly</h1>
        <ShortsIcon size="102" />
      </ShortlyLogo>
    </Container>
  );
}
