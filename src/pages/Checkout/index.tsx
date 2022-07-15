import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ButtonPayament } from "../../components/ButtonPayament";
import { CartContext } from "../../hooks/CartContext";
import { FormatCurrencyNumber } from "../../utils/formatCurrencyNumber";
import { ItensCart } from "./components/ItensCart";
import {
  ButtonConfirmRequest,
  CheckoutContainerForm,
  ContentButtonsPayament,
  ContentCartItens,
  ContentCep,
  ContentCheckoutValue,
  ContentCity,
  ContentInput,
  ContentNumber,
  ContentPayament,
  ContentStreet,
  DeliveryText,
  HeaderTitle,
  HeaderTitlePayament,
  SectionCart,
  SectionCompleteRequest,
  TotalValueItensText,
  TotalValueText,
} from "./styles";

export function Checkout() {
  const { dataCart } = useContext(CartContext);

  const totalItens = dataCart.reduce((acc, value) => {
    return acc + value.price * value.quantity;
  }, 0);

  const valueDelivery = 3.5;
  return (
    <CheckoutContainerForm>
      <SectionCompleteRequest>
        <h2>Complete seu pedido</h2>

        <HeaderTitle>
          <MapPinLine size={22} />
          <div>
            <span>Endereço de Entrega</span>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </HeaderTitle>

        <ContentInput>
          <ContentCep>
            <input placeholder="CEP" />
          </ContentCep>
          <ContentStreet>
            <input placeholder="RUA" />
          </ContentStreet>
          <ContentNumber>
            <input placeholder="Número" />
            <input placeholder="Complemento" />
          </ContentNumber>
          <ContentCity>
            <input placeholder="Bairro" />
            <input placeholder="Cidade" />
            <input placeholder="UF" />
          </ContentCity>
        </ContentInput>

        <ContentPayament>
          <HeaderTitlePayament>
            <CurrencyDollar size={22} />
            <div>
              <span>Pagamento</span>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </HeaderTitlePayament>

          <ContentButtonsPayament>
            <ButtonPayament
              icon={<CreditCard size={16} />}
              title="Cartão de crédito"
            />
            <ButtonPayament
              icon={<Bank size={16} />}
              title="Cartão de débito"
            />
            <ButtonPayament icon={<Money size={16} />} title="Dinheiro" />
          </ContentButtonsPayament>
        </ContentPayament>
      </SectionCompleteRequest>

      <SectionCart>
        <h2>Cafés selecionados</h2>

        <ContentCartItens>
          {dataCart.map((item) => (
            <ItensCart
              key={item.idCart}
              id={item.id}
              idCart={item.idCart}
              image={item.image}
              price={item.price}
              quantity={item.quantity}
              title={item.title}
            />
          ))}
        </ContentCartItens>

        <ContentCheckoutValue>
          <TotalValueItensText>
            <span>Total de itens</span>
            <span>{FormatCurrencyNumber(totalItens)}</span>
          </TotalValueItensText>
          <DeliveryText>
            <span>Entrega</span>
            <span>{FormatCurrencyNumber(valueDelivery)}</span>
          </DeliveryText>
          <TotalValueText>
            <span>Total</span>
            <span>{FormatCurrencyNumber(totalItens + valueDelivery)}</span>
          </TotalValueText>

          <Link to="/success">
            <ButtonConfirmRequest disabled={dataCart.length === 0}>
              Confirmar pedido
            </ButtonConfirmRequest>
          </Link>
        </ContentCheckoutValue>
      </SectionCart>
    </CheckoutContainerForm>
  );
}
