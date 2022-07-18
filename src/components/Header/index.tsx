import { MapPin, ShoppingCart } from "phosphor-react";
import {
  ButtonCart,
  ButtonLocation,
  Content,
  HeaderContainer,
  PointerItens,
} from "./styles";

import Logo from "../../assets/logo-coffe.svg";
import { defaultThemeColor } from "../../styles/themes/default";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../hooks/CartContext";

export function Header() {
  const { dataCart } = useContext(CartContext);

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <Content>
        <ButtonLocation>
          <MapPin
            size={22}
            weight="fill"
            color={`${defaultThemeColor["purple"]}`}
          />
          <span>São Paulo, SP</span>
        </ButtonLocation>
        <Link to="/checkout">
          <ButtonCart>
            <ShoppingCart size={22} weight="fill" />
            {dataCart.length > 0 && (
              <PointerItens>{dataCart.length}</PointerItens>
            )}
          </ButtonCart>
        </Link>
      </Content>
    </HeaderContainer>
  );
}
