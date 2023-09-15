import { InputHTMLAttributes } from "react";
import { SearchLupe } from "./search-loupe";
import { InputContainer, PrimaryInputContainer, SearchButton } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  handleChange: (value: string) => void;
}

export function PrimaryInput(props: InputProps) {
  return (
    <InputContainer>
      <PrimaryInputContainer onChange={(event) => props.handleChange(event.target.value)} {...props} />
      <SearchButton>
        <SearchLupe />
      </SearchButton>
    </InputContainer>
  );
}
