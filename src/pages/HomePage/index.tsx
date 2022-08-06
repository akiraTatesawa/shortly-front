// Components
import NewLinkForm from "../../components/NewLinkForm";
import UserLinks from "../../components/UserLinks";
// Styles
import { Container, NewLinkSection, UserLinksSection } from "./styles";

export default function HomePage() {
  return (
    <main>
      <Container>
        <NewLinkSection>
          <NewLinkForm />
        </NewLinkSection>
        <UserLinksSection>
          <UserLinks />
        </UserLinksSection>
      </Container>
    </main>
  );
}
