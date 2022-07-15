import { createContext, ReactNode, useEffect, useState } from "react";
import { data } from "../data";

interface CartContextProviderProps {
  children: ReactNode;
}

interface DataCoffessProps {
  id: number;
  image: string;
  options: string[];
  title: string;
  subtitle: string;
  price: number;
  quantity: number;
}
[];

interface DataCartProps {
  id: number;
  idCart: number;
  image: string;
  options: string[];
  title: string;
  subtitle: string;
  price: number;
  quantity: number;
}
[];

interface CartContextProps {
  dataCoffees: DataCoffessProps[];
  dataCart: DataCartProps[];
  onPlusQuantityProduct: (id: number) => void;
  onMinusQuantityProduct: (id: number) => void;
  onPlusQuantityProductCart: (idCart: number) => void;
  onMinusQuantityProductCart: (idCart: number) => void;
  onRemoveProductCart: (idCart: number) => void;
  onAddItemCart: (id: number) => void;
}

export const CartContext = createContext({} as CartContextProps);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [dataCoffees, setDataCoffees] = useState<DataCoffessProps[]>([]);
  const [dataCart, setDataCart] = useState<DataCartProps[]>([]);

  useEffect(() => {
    setDataCoffees(data);
  }, []);

  useEffect(() => {
    const getProductCartLocalStorage = localStorage.getItem(
      "@coffeDelivery:cart"
    );

    if (getProductCartLocalStorage) {
      setDataCart(JSON.parse(getProductCartLocalStorage));
    }
  }, []);

  function onPlusQuantityProduct(id: number) {
    setDataCoffees((old) =>
      old.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  }

  function onMinusQuantityProduct(id: number) {
    setDataCoffees((old) =>
      old.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity === 1 ? 1 : item.quantity - 1,
            }
          : item
      )
    );
  }

  function onPlusQuantityProductCart(idCart: number) {
    setDataCart((old) =>
      old.map((item) =>
        item.idCart === idCart
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  }

  function onMinusQuantityProductCart(idCart: number) {
    setDataCart((old) =>
      old.map((item) =>
        item.idCart === idCart
          ? {
              ...item,
              quantity: item.quantity === 1 ? 1 : item.quantity - 1,
            }
          : item
      )
    );
  }

  function onAddItemCart(id: number) {
    const product = dataCoffees.find((item) => item.id === id);

    if (!product) {
      alert("Produto não encontrado");
      return;
    }

    const newObjProduct = {
      ...product,
      idCart: new Date().getTime(),
    };

    const getProductCartLocalStorage = localStorage.getItem(
      "@coffeDelivery:cart"
    );

    setDataCart((old) => [...old, newObjProduct]);

    let arr = [];

    if (!getProductCartLocalStorage) {
      arr = [newObjProduct];

      localStorage.setItem("@coffeDelivery:cart", JSON.stringify(arr));
      return;
    }

    arr = [...JSON.parse(getProductCartLocalStorage), newObjProduct];

    localStorage.setItem("@coffeDelivery:cart", JSON.stringify(arr));
  }

  function onRemoveProductCart(idCart: number) {
    const getProductCartLocalStorage = localStorage.getItem(
      "@coffeDelivery:cart"
    );

    if (getProductCartLocalStorage) {
      const arrGetProductCartLocalStorage = JSON.parse(
        getProductCartLocalStorage
      );

      const filterItem = arrGetProductCartLocalStorage.filter(
        (item: any) => item.idCart !== idCart
      );

      localStorage.setItem("@coffeDelivery:cart", JSON.stringify(filterItem));
    }

    setDataCart((old) => old.filter((item) => item.idCart !== idCart));
  }

  return (
    <CartContext.Provider
      value={{
        dataCoffees,
        dataCart,
        onPlusQuantityProduct,
        onMinusQuantityProduct,
        onPlusQuantityProductCart,
        onMinusQuantityProductCart,
        onRemoveProductCart,
        onAddItemCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
