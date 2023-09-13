"use client";
import { FilterByPriority } from "../filterByPriority";
import { FilterByType } from "../filterByType";
import { FilterContainer } from "./styles";

export function FilterBar() {
  return (
    <FilterContainer>
      <FilterByType />
      <FilterByPriority />
    </FilterContainer>
  );
}
