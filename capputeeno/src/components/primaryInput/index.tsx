import { SearchLupe } from "./search-loupe";
import { InputContainer, PrimaryInputContainer, SearchButton } from "./styles";

export function PrimaryInput() {
  return (
    <InputContainer>
      <PrimaryInputContainer placeholder="Procurando por algo específico?" />
      <SearchButton>
        <SearchLupe />
      </SearchButton>
    </InputContainer>
  );
}
