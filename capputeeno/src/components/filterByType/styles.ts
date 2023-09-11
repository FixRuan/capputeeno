import styled, { css } from "styled-components";

interface FilterItemsProps {
  selected?: boolean;
}

export const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  list-style: none;
`;

export const FilterItem = styled.li<FilterItemsProps>`
  color: ${({ theme }) => theme.colors.textDark};
  text-align: center;
  text-transform: uppercase; 
  font-size: 16px;
  line-height: 22px;
  font-weight: ${({ selected }) => selected ? "600" : "400"};
  font-family: inherit;
  cursor: pointer;

  ${({ selected, theme }) => selected && css`
    border-bottom: 4px solid ${theme.colors.primary};
  `};
`;
