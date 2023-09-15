/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { FilterType, PriorityTypes } from "@/@types/filter-types";
import { ReactNode, createContext, useState } from "react";

interface FilterContextProps {
  search: string;
  page: number;
  type: FilterType;
  priority: PriorityTypes;
  setPriority: (value: PriorityTypes) => any;
  setSearch: (value: string) => any;
  setPage: (value: number) => any;
  setType: (value: FilterType) => any;
}

interface ProviderProps {
  children: ReactNode;
}

export const FilterContext = createContext({} as FilterContextProps);

export function FilterContextProvider({ children }: ProviderProps) {
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [type, setType] = useState<FilterType>(FilterType.ALL);
  const [priority, setPriority] = useState<PriorityTypes>(PriorityTypes.POPULARITY);

  return (
    <FilterContext.Provider value={{
      search,
      page,
      type,
      priority,
      setPage,
      setSearch,
      setType,
      setPriority
    }}>
      {children}
    </FilterContext.Provider>
  );
}
