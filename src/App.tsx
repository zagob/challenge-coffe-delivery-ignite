import { CartContextProvider } from "./hooks/CartContext";
import { Router } from "./Router";

export function App() {
  return (
    <CartContextProvider>
      <Router />
    </CartContextProvider>
  );
}
