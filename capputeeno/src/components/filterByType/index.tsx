"use client";
import { FilterItem, FilterList } from "./styles";

export function FilterByType() {
  return (
    <FilterList>
      <FilterItem selected>Todos os produtos</FilterItem>
      <FilterItem>Camisetas</FilterItem>
      <FilterItem>Canecas</FilterItem>
    </FilterList>
  );
}
