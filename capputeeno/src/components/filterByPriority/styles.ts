import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  button{
    border: none;
    background: transparent;
    cursor: pointer;
    font-family: inherit;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: ${({ theme }) => theme.colors.textDark};

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const PriorityFilter = styled.ul`
  width: 250px;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 12px 16px;
  top: 100%;
  z-index: 10;

  list-style: none;

  li{
    font-weight: 400;
    line-height: 22px;
    color: ${({ theme }) => theme.colors.textDark};
    font-size: 14px;
    cursor: pointer;
  }

  li + li{
    margin-top: 10px;
  }
`;
