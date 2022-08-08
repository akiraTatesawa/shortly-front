import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { redirectToUrl } from "../../services/api";
import { Container } from "./styles";

export default function RedirectPage() {
  const [url, setUrl] = useState<string | undefined>(undefined);
  const { shortUrl } = useParams();
  const navigate = useNavigate();

  async function getUrl(shortUrl: string) {
    try {
      const promise = await redirectToUrl(shortUrl);

      setUrl(promise.data.replace("OK. Redirecting to ", ""));
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  }

  useEffect(() => {
    if (!url) {
      getUrl(shortUrl || "");
    } else {
      window.location.href = url;
    }
  }, [url]);

  return (
    <Container>
      <p>Você está sendo redirecionado para</p>
      <p className="url">{url || "..."}</p>
    </Container>
  );
}
