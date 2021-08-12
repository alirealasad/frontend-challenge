import { createContext, useContext } from "react";
import ProductStore from "./productStore";
import PageStore from "./pageStore";
import CommonStore from "./commonStore";
import CartStore from "./cartStore";

interface Store {
  productStore: ProductStore;
  pageStore: PageStore;
  cartStore: CartStore;
  commonStore: CommonStore;
}

export const store: Store = {
  productStore: new ProductStore(),
  pageStore: new PageStore(),
  cartStore: new CartStore(),
  commonStore: new CommonStore()
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};
