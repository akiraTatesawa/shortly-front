import Nav from "../Nav";
// Styles
import { Container, ShortlyLogo, ShortsIcon } from "./styles";

export default function Header() {
  return (
    <Container>
      <Nav />

      <ShortlyLogo>
        <h1>Shortly</h1>
        <ShortsIcon size="102" />
      </ShortlyLogo>
    </Container>
  );
}
