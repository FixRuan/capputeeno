/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";


export function useLocalStorage(item: string) {
  const [value, setValue] = useState<string>(() => {
    if (localStorage) {
      return JSON.parse(localStorage.getItem(item)!);
    }

    return "";
  });

  function updateLocalStorage(newValue: any) {
    setValue(newValue);
    localStorage.setItem(item, JSON.stringify(newValue));
  }

  return { value, updateLocalStorage };
}
