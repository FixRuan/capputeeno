import { useState } from "react";
import { Arrow } from "./Arrow";
import { FilterContainer, PriorityFilter } from "./styles";
import { useFilter } from "@/hooks/useFilter";
import { PriorityTypes } from "@/@types/filter-types";

export function FilterByPriority() {
  const [isOpen, setIsOpen] = useState(false);
  const { setPriority } = useFilter();

  function handleOpen() {
    setIsOpen(!isOpen);
  }

  function handleUpdatePriority(value: PriorityTypes) {
    setPriority(value);
    setIsOpen(false);
  }

  return (
    <FilterContainer>
      <button onClick={() => handleOpen()}>Organizar por <Arrow /></button>

      {isOpen &&
        <PriorityFilter>
          <li onClick={() => handleUpdatePriority(PriorityTypes.NEWS)}>
            Novidades
          </li>

          <li onClick={() => handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)}>
            Preço: Maior - menor
          </li>

          <li onClick={() => handleUpdatePriority(PriorityTypes.MINOR_PRICE)}>
            Preço: Menor - maior
          </li>

          <li onClick={() => handleUpdatePriority(PriorityTypes.POPULARITY)}>
            Mais Vendidos
          </li>
        </PriorityFilter>
      }
    </FilterContainer>
  );
}
