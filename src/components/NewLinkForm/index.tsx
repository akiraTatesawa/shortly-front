import { useState } from "react";

// API
import { postNewUrl } from "../../services/api";
// Utils
import { buildRequestConfig } from "../../utils";
// Components
import Input from "../Input";
import SubmitButton from "../SubmitButton";
// Styles
import { Form } from "./styles";

export default function NewLinkForm() {
  const [url, setUrl] = useState("");
  const [isSendingUrl, setIsSendingUrl] = useState(false);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setUrl(value);
  }

  async function sendNewLink(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSendingUrl(true);

    const config = buildRequestConfig();
    const data = {
      url,
    };

    try {
      const promise = await postNewUrl(data, config);

      console.log(promise.data);
    } catch (error) {
      console.log(error);
    }

    setIsSendingUrl(false);
    setUrl("");
  }

  return (
    <Form onSubmit={(event) => sendNewLink(event)}>
      <Input
        name="url"
        type="url"
        placeholder="Links que cabem no bolso"
        value={url}
        setValue={(event) => handleChange(event)}
        isDisabled={isSendingUrl}
      />
      <SubmitButton
        title="Encurtar Link"
        isCentered={false}
        isDisabled={isSendingUrl}
      />
    </Form>
  );
}
