import { InputHTMLAttributes } from "react";
import {
  InputContainer,
  InputStyled,
  Label,
  InputContainerCheckBox,
  InputCheckBoxStyled,
  LabelCheckBox,
} from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
}

export const Input = (props: InputProps) => {
  if (props.type == "checkbox") {
    return (
      <InputContainerCheckBox>
        <InputCheckBoxStyled {...props} />
        <LabelCheckBox>{props.label}</LabelCheckBox>
      </InputContainerCheckBox>
    );
  }

  return (
    <InputContainer>
      <Label>{props.label}</Label>
      <InputStyled {...props} />
    </InputContainer>
  );
};
