import { useState } from "react";

// Types
import { APIUserUrlData } from "../../@types";
// API
import { deleteUrl } from "../../services/api";
// Utils
import { buildRequestConfig } from "../../utils";
// Styles
import { Container, DeleteIcon } from "./styles";

interface UserLinksProps {
  userLinksData: APIUserUrlData[];
  reloadLinks: () => void;
}

interface LinkContainerProps extends APIUserUrlData {
  reloadLinks: () => void;
}

function LinkContainer({
  id,
  shortUrl,
  url,
  visitCount,
  reloadLinks,
}: LinkContainerProps) {
  const [isDeletingUrl, setIsDeletingUrl] = useState(false);

  async function handleDeleteUrl() {
    setIsDeletingUrl(true);
    try {
      const config = buildRequestConfig();
      await deleteUrl(id, config);
      reloadLinks();
    } catch (error) {
      console.log(error);
    }
  }

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
        <button
          type="button"
          onClick={handleDeleteUrl}
          disabled={isDeletingUrl}
        >
          <DeleteIcon $isDeleting={isDeletingUrl} />
        </button>
      </div>
    </li>
  );
}

export default function UserLinks({
  userLinksData,
  reloadLinks,
}: UserLinksProps) {
  return (
    <Container>
      {userLinksData.map((linkData) => (
        <LinkContainer
          id={linkData.id}
          url={linkData.url}
          key={linkData.id}
          shortUrl={linkData.shortUrl}
          visitCount={linkData.visitCount}
          reloadLinks={reloadLinks}
        />
      ))}
    </Container>
  );
}
