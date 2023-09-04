import { styled } from "styled-components";

export const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 200px;
`;

export const Logo = styled.a`
  color: ${({ theme }) => theme.colors.logoColor};
  font-size: 40px;
  line-height: 150%;
`;
