import { InputHTMLAttributes } from "react";
import { ButtonStyled } from "./styles";

interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
  background: string;
  icon?: JSX.Element;
  text: string;
}

export const Button = (props: ButtonProps) => {
  return (
    <ButtonStyled style={{ backgroundColor: props.background }}>
      {props.icon}
      {props.text}
    </ButtonStyled>
  );
};
