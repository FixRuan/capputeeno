import { PrimaryInput } from "../primaryInput";
import { Logo, TagHeader } from "./styles";
import { Saira_Stencil_One } from "next/font/google";

const sairaStencilOne = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"]
});

interface HeaderProps {
  logoName: string;
}

export function Header({ logoName }: HeaderProps) {
  return (
    <TagHeader>
      <Logo className={sairaStencilOne.className}>
        {logoName}
      </Logo>

      <div>
        <PrimaryInput />
      </div>
    </TagHeader>
  );
}