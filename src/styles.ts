import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SectionLeft = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100vh;
  background-color: #f7fafc;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const SectionRight = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
