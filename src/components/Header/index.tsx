import { useContext } from "react";
import { Link } from "react-router-dom";

import { UserData } from "../../@types";
import { UserContext } from "../../contexts/UserContext";
import {
  Container,
  LoginSignUpLinks,
  RightSide,
  LeftSide,
  ShortlyLogo,
  ShortsIcon,
} from "./styles";

interface HeaderLinksProps {
  userData: UserData | undefined | null;
}

function HeaderLinks({ userData }: HeaderLinksProps) {
  const renderRightSideContent = () => {
    if (userData?.name) {
      return <span>Seja bem-vindo, {userData.name} </span>;
    }
    return null;
  };

  const renderLeftSideContent = () => {
    if (!userData?.name) {
      return (
        <>
          <Link to="/sign-in" className="login">
            Entrar
          </Link>
          <Link to="/sign-up">Cadastrar-se</Link>
        </>
      );
    }

    return (
      <>
        <Link to="/home">Home</Link>
        <Link to="/ranking">Ranking</Link>
        <Link to="/" className="logout">
          Sair
        </Link>
      </>
    );
  };

  const rightSideContent = renderRightSideContent();
  const leftSideContent = renderLeftSideContent();

  return (
    <LoginSignUpLinks>
      <RightSide>{rightSideContent}</RightSide>
      <LeftSide>{leftSideContent}</LeftSide>
    </LoginSignUpLinks>
  );
}

export default function Header() {
  const userContext = useContext(UserContext);

  return (
    <Container>
      <HeaderLinks userData={userContext?.userData} />

      <ShortlyLogo>
        <h1>Shortly</h1>
        <ShortsIcon size="102" />
      </ShortlyLogo>
    </Container>
  );
}
