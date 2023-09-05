import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  position: relative;
`;

export const CartItems = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 100%;
  position: absolute;
  bottom: -8px;
  right: -8px;
  background-color: ${({ theme }) => theme.colors.notification};
  color: ${({ theme }) => theme.colors.white};
`;
