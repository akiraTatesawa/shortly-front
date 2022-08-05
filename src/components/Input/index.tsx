import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";

import { InputContainer } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputTypeAttribute> {
  setValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled: boolean;
}

export default function Input({
  name,
  setValue,
  type,
  placeholder,
  isDisabled,
  value,
}: InputProps) {
  return (
    <InputContainer
      value={value}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={setValue}
      required
      disabled={isDisabled}
      autoComplete="off"
      maxLength={30}
    />
  );
}
