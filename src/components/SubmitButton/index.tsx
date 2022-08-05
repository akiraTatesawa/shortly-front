import { Button } from "./styles";

interface SubmitButtonProps extends React.HTMLProps<HTMLButtonElement> {
  title: string;
  isCentered: boolean;
  isDisabled: boolean;
}

export default function SubmitButton({
  title,
  isCentered,
  isDisabled,
}: SubmitButtonProps) {
  return (
    <Button type="submit" isCentered={isCentered} disabled={isDisabled}>
      {title}
    </Button>
  );
}
