import bgCoffe from "../../assets/background-coffe.png";
import {
  Content,
  ContentProducts,
  ContentText,
  MainContainer,
  TitleProduct,
} from "./styles";
import { Clock, Coffee, Package, ShoppingCart } from "phosphor-react";
import { ProductItem } from "../../components/ProductItem";
import { useContext } from "react";
import { CartContext } from "../../hooks/CartContext";

export function Home() {
  const { dataCoffees } = useContext(CartContext);

  return (
    <>
      <MainContainer>
        <Content>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>
            Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>

          <ContentText>
            <span>
              <span>
                <ShoppingCart size={16} weight="fill" />
              </span>
              Compra simples e segura
            </span>
            <span>
              <span>
                <Package size={16} weight="fill" />
              </span>
              Embalagem mantém o café intacto
            </span>
            <span>
              <span>
                <Clock size={16} weight="fill" />
              </span>
              Entrega rápida e rastreada
            </span>
            <span>
              <span>
                <Coffee size={16} weight="fill" />
              </span>
              O café chega fresquinho até você
            </span>
          </ContentText>
        </Content>

        <img src={bgCoffe} alt="Imagem de café" />
      </MainContainer>

      <TitleProduct>Nossos cafés</TitleProduct>

      <ContentProducts>
        {dataCoffees.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            image={item.image}
            options={item.options}
            price={item.price}
            title={item.title}
            subtitle={item.subtitle}
            quantity={item.quantity}
          />
        ))}
      </ContentProducts>
    </>
  );
}
