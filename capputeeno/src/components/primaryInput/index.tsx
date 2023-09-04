import { SearchLupe } from "./search-loupe";
import { InputContainer, PrimaryInputContainer } from "./styles";

export function PrimaryInput() {
  return (
    <InputContainer>
      <PrimaryInputContainer placeholder="Procurando por algo específico?" />
      <SearchLupe />
    </InputContainer>
  );
}
