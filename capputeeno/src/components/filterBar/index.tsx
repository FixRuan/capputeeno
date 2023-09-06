"use client";
import { FilterByType } from "../filterByType";
import { FilterContainer } from "./styles";

export function FilterBar() {
  return (
    <FilterContainer>
      <FilterByType />
    </FilterContainer>
  );
}
