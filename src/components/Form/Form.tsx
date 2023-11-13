import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import {
  FormContainer,
  Subtitle,
  TextContainer,
  Title,
  ButtonContainer,
  TextLink,
} from "./styles";
import GoogleLogo from "../../assets/images/google-logo.svg";

export const Form = () => {
  return (
    <FormContainer>
      <TextContainer>
        <Subtitle>Bem-vindo de volta</Subtitle>
        <Title>Faça Login na sua conta</Title>
      </TextContainer>
      <Input label="E-mail" placeholder="email@email.com" type="email" />
      <Input label="Senha" placeholder="*******" type="password" />
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          marginTop: "24px",
          marginBottom: "24px",
        }}
      >
        <Input type="checkbox" label="Lembre de mim" />
        <TextLink>Esqueceu a senha</TextLink>
      </div>
      <ButtonContainer>
        <Button text="Entrar" background="#04C35C" />
        <Button
          text="Ou faça login com o Google"
          background="#1A202C"
          icon={<img src={GoogleLogo} alt="Google logo" />}
        />
      </ButtonContainer>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          gap: "4px",
          marginTop: "24px",
          marginBottom: "24px",
        }}
      >
        <p style={{ color: "#1A202C", fontSize: "16px", fontFamily: "Lato" }}>
          Não tem conta?
        </p>
        <TextLink>Cadastre-se</TextLink>
      </div>
    </FormContainer>
  );
};
