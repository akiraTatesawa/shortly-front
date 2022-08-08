import { useContext } from "react";
import { Link } from "react-router-dom";

// Context
import { UserContext } from "../../contexts/UserContext";
// Utils
import { deleteUserFromLocalStorage } from "../../utils";
// Styles
import { LeftSide, LoginSignUpLinks, RightSide } from "./styles";

export default function Nav() {
  const userContext = useContext(UserContext);

  function logOut() {
    deleteUserFromLocalStorage();
    userContext?.setData({ name: undefined, token: undefined });
  }

  const renderRightSideContent = () => {
    if (userContext?.userData?.name) {
      const { userData } = userContext;
      return <span>Seja bem-vindo, {userData.name} </span>;
    }
    return null;
  };

  const renderLeftSideContent = () => {
    if (!userContext?.userData?.name) {
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
        <Link to="/">Home</Link>
        <Link to="/ranking">Ranking</Link>
        <Link to="/ranking" className="logout" onClick={() => logOut()}>
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
