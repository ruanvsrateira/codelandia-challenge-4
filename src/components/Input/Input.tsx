import { InputHTMLAttributes } from "react";
import { InputContainer, InputStyled, Label } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = (props: InputProps) => {
  return (
    <InputContainer>
      <Label>{props.label}</Label>
      <InputStyled {...props} />
    </InputContainer>
  );
};
