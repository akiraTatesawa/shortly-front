import { Button } from "./styles";

interface SubmitButtonProps {
  title: string;
  isCentered: boolean;
}

export default function SubmitButton({ title, isCentered }: SubmitButtonProps) {
  return (
    <Button type="submit" isCentered={isCentered}>
      {title}
    </Button>
  );
}
