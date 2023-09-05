import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ShoppingBag } from "./shoppingBag";
import { CartContainer, CartItems } from "./styles";

export function CartControl() {
  const { value } = useLocalStorage("cartItems");

  return (
    <CartContainer>
      <ShoppingBag />

      {value != null && <CartItems>{value}</CartItems>}
    </CartContainer>
  );
}
