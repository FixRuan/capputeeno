import styled from "styled-components";

export const InputContainer = styled.div`
width: 4356px;
display: flex;
align-items: center;
justify-content: space-evenly;
  height: 50px;
  border-radius: 8px;
  padding: 10px 16px;
  background-color: ${({ theme }) => theme.colors.bgSecondary};
`;

export const PrimaryInputContainer = styled.input`
width: 100%;
  border: none;

  background-color: ${({ theme }) => theme.colors.bgSecondary};
  color: ${({ theme }) => theme.colors.textDark};

  font-family: inherit;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
`;
