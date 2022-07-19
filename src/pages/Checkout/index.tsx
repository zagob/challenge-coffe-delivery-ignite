import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { ChangeEvent, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ButtonPayament } from "../../components/ButtonPayament";
import { CartContext } from "../../hooks/CartContext";
import { FormatCurrencyNumber } from "../../utils/formatCurrencyNumber";
import { ItensCart } from "./components/ItensCart";
import cep from "cep-promise";
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
  InputForm,
  SectionCart,
  SectionCompleteRequest,
  TotalValueItensText,
  TotalValueText,
} from "./styles";
import InputMask from "react-input-mask";
import toast, { Toaster } from "react-hot-toast";

interface dataFormProps {
  cep: number;
  city: string;
  complement: string;
  district: string;
  number: number;
  street: string;
  uf: string;
}

export function Checkout() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<dataFormProps>();
  const { dataCart, onCleanCart } = useContext(CartContext);
  const [optionPayment, setOptionPayment] = useState("");

  const totalItens = dataCart.reduce((acc, value) => {
    return acc + value.price * value.quantity;
  }, 0);

  const valueDelivery = 3.5;
  function handleSubmitForm(data: dataFormProps) {
    localStorage.setItem(
      "@coffeDelivery:address",
      JSON.stringify({ ...data, payment: optionPayment })
    );
    onCleanCart();
    navigate("/success");
  }
  // 17012-634
  async function handleChange(e: ChangeEvent) {
    const getCep = watch("cep");
    if (String(getCep).length === 9) {
      const c = await cep(getCep);
      if (c) {
        toast.success("Cep adicionado");
        setValue("street", c.street);
        setValue("district", c.neighborhood);
        setValue("city", c.city);
        setValue("uf", c.state);
      } else {
        return;
      }
    }
  }

  return (
    <CheckoutContainerForm onSubmit={handleSubmit(handleSubmitForm)}>
      <Toaster />
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
          <ContentCep error={!!errors?.cep}>
            <InputMask
              mask="99999-999"
              placeholder="CEP: (00000-000)"
              {...register("cep", {
                required: true,
                max: 8,
                pattern: {
                  value: /^[0-9]{5}-[0-9]{3}$/,
                  message: "Invalid cep",
                },
                onBlur: (e) => handleChange(e),
              })}
            />
            {errors.cep && <label>* CEP é obrigatório</label>}
          </ContentCep>
          <ContentStreet>
            <InputForm
              error={!!errors?.street}
              {...register("street", { required: true })}
              placeholder="RUA"
            />
            {errors.street && <label>* Rua é obrigatório</label>}
          </ContentStreet>
          <ContentNumber>
            <div>
              <InputForm
                error={!!errors?.number}
                {...register("number", { required: true })}
                placeholder="Número"
              />
              {errors.number && <label>* Número é obrigatório</label>}
            </div>
            <InputForm {...register("complement")} placeholder="Complemento" />
          </ContentNumber>
          <ContentCity>
            <div>
              <InputForm
                error={!!errors?.district}
                {...register("district", { required: true })}
                placeholder="Bairro"
              />
              {errors.district && <label>* Bairro é obrigatório</label>}
            </div>
            <div>
              <InputForm
                error={!!errors?.city}
                {...register("city", { required: true })}
                placeholder="Cidade"
              />
              {errors.city && <label>* Cidade é obrigatório</label>}
            </div>
            <div>
              <InputForm
                error={!!errors?.uf}
                {...register("uf", { required: true })}
                placeholder="UF"
              />
              {errors.uf && <label>* UF é obrigatório</label>}
            </div>
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
              active={optionPayment === "CREDIT"}
              value={optionPayment}
              onClick={() => setOptionPayment("CREDIT")}
              icon={<CreditCard size={16} />}
              title="Cartão de crédito"
            />
            <ButtonPayament
              active={optionPayment === "DEBIT"}
              value={optionPayment}
              onClick={() => setOptionPayment("DEBIT")}
              icon={<Bank size={16} />}
              title="Cartão de débito"
            />
            <ButtonPayament
              active={optionPayment === "MONEY"}
              onClick={() => setOptionPayment("MONEY")}
              value={optionPayment}
              icon={<Money size={16} />}
              title="Dinheiro"
            />
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

          <ButtonConfirmRequest
            type="submit"
            disabled={dataCart.length === 0 || optionPayment.length === 0}
          >
            Confirmar pedido
          </ButtonConfirmRequest>
        </ContentCheckoutValue>
      </SectionCart>
    </CheckoutContainerForm>
  );
}
