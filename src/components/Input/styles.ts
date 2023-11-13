import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100% !important;
  gap: 8px;
  margin-bottom: 8px;
`;

export const InputStyled = styled.input`
  width: 100%;
  height: 50px;
  padding-left: 10px;
  border: none;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  color: #1a202c;
  font-family: "Lato";
  font-weight: 400;
`;

export const Label = styled.label`
  font-family: "Lato";
  font-weight: 400;
  font-size: 16px;
  color: #1a202c;
`;

export const InputContainerCheckBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const InputCheckBoxStyled = styled.input``;

export const LabelCheckBox = styled.label`
  font-family: "Lato";
  font-weight: 400;
  font-size: 16px;
  color: #1a202c;
`;
