import { Link } from "react-router-dom";

import { Container, LoginSignUpLinks, ShortlyLogo, ShortsIcon } from "./styles";

export default function Header() {
  return (
    <Container>
      <LoginSignUpLinks>
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
