// Types
import { APIUserUrlData } from "../../@types";
// Styles
import { Container, DeleteIcon } from "./styles";

interface UserLinksProps {
  userLinksData: APIUserUrlData[];
}

type LinkContainerProps = APIUserUrlData;

function LinkContainer({ id, shortUrl, url, visitCount }: LinkContainerProps) {
  return (
    <li>
      <div className="url">
        <a href={url} target="_blank" rel="noreferrer">
          {url}
        </a>
      </div>
      <div className="short-url">{shortUrl}</div>
      <div>
        <span className="visit-count">
          Quantidade de visitantes: {visitCount}
        </span>
        <button type="button">
          <DeleteIcon />
        </button>
      </div>
    </li>
  );
}

export default function UserLinks({ userLinksData }: UserLinksProps) {
  return (
    <Container>
      {userLinksData.map((linkData) => (
        <LinkContainer
          url={linkData.url}
          key={linkData.id}
          shortUrl={linkData.shortUrl}
          visitCount={linkData.visitCount}
        />
      ))}
    </Container>
  );
}
