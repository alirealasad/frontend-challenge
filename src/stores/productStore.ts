import { makeAutoObservable, runInAction } from "mobx";
import { Product } from "types";
import agent from "../agent";
import { store } from "./store";

class ProductStore {
  productRegistery = new Map<number, Product>();

    constructor() {
      makeAutoObservable(this);
    }

    get products() {
      return Array.from(this.productRegistery.values());
    }


    loadProducts = async (page:number) => {
      store.commonStore.setAppLoading(true);
      this.clearProducts()
      const data = await agent.Products.page(page|store.pageStore.currentPage);
      const products = data.results;

      runInAction(() => {
        store.pageStore.productsCount = data.count;

        products.forEach((product) => {
          this.setProduct(product);
        });
      });

      store.commonStore.setAppLoading(false);
    };

    private setProduct = (product: Product) => {
      product.quantity = 1;
      this.productRegistery.set(product.gtin, product);
    };

    clearProducts = () => {
      this.productRegistery.clear();
    };

  }

  export default ProductStore;
