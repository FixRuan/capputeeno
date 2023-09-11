/* eslint-disable @typescript-eslint/no-explicit-any */
import { FilterType } from "@/@types/filter-types";
import { ReactNode, createContext, useState } from "react";

interface FilterContextProps {
  search: string;
  page: number;
  type: FilterType;
  setSearch: (value: string) => any;
  setPage: (value: number) => any;
  setType: (value: FilterType) => any;
}

interface ProviderProps {
  children: ReactNode;
}

const FilterContext = createContext({} as FilterContextProps);

export function FilterContextProvider({ children }: ProviderProps) {
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [type, setType] = useState<FilterType>(FilterType.ALL);

  return (
    <FilterContext.Provider value={{ search, page, type, setPage, setSearch, setType }}>
      {children}
    </FilterContext.Provider>
  );
}
