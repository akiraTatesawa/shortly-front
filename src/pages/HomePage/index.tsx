import { useContext, useEffect, useState } from "react";

// Types
import { APIUserData } from "../../@types";
// Components
import NewLinkForm from "../../components/NewLinkForm";
import UserLinks from "../../components/UserLinks";
// Context
import { UserContext } from "../../contexts/UserContext";
// API
import { getUserDataLinks } from "../../services/api";
/// Utils
import { buildRequestConfig, getUserDataFromLocalStorage } from "../../utils";
// Styles
import { Container, NewLinkSection, UserLinksSection } from "./styles";

export default function HomePage() {
  const userContextData = useContext(UserContext);
  const [userAPIData, setUserAPIData] = useState<APIUserData>();

  async function getUserData() {
    const config = buildRequestConfig();
    try {
      const promise = await getUserDataLinks(config);
      setUserAPIData(promise.data);

      const localStorageUser = getUserDataFromLocalStorage();
      const updatedUser = {
        token: localStorageUser.token,
        name: promise.data.name,
      };

      localStorage.setItem("userData", JSON.stringify(updatedUser));
      userContextData?.setData(updatedUser);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <main>
      <Container>
        <NewLinkSection>
          <NewLinkForm reloadLinks={() => getUserData()} />
        </NewLinkSection>
        <UserLinksSection>
          <UserLinks
            userLinksData={userAPIData?.shortenedUrls || []}
            reloadLinks={() => getUserData()}
          />
        </UserLinksSection>
      </Container>
    </main>
  );
}
