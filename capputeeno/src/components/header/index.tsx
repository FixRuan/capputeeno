import { useFilter } from "@/hooks/useFilter";
import { CartControl } from "../cartControl";
import { PrimaryInput } from "../primaryInput";
import { HeaderInputWrapper, Logo, TagHeader } from "./styles";
import { Saira_Stencil_One } from "next/font/google";

const sairaStencilOne = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"]
});

interface HeaderProps {
  logoName: string;
}

export function Header({ logoName }: HeaderProps) {
  const { setSearch, search } = useFilter();

  return (
    <TagHeader>
      <Logo className={sairaStencilOne.className}>
        {logoName}
      </Logo>

      <HeaderInputWrapper>
        <PrimaryInput
          value={search}
          handleChange={setSearch}
          placeholder="Procurando por algo específico?"
        />
        <CartControl />
      </HeaderInputWrapper>
    </TagHeader>
  );
}
