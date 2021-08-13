import { makeAutoObservable, runInAction } from "mobx";
import { Product } from "types";
import agent from "../agent";
import { store } from "./store";

class ProductStore {
  productRegistery = new Map<number, Product>();
  selectedProduct?: Product;

    constructor() {
      makeAutoObservable(this);
    }

    get products() {
      return Array.from(this.productRegistery.values());
    }

    get totalProducts() {
      return Array.from(this.productRegistery.values()).reduce(
        (total, product) => product.quantity + total,
        0
      );
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

    loadProduct = async (gtin: string) => {
        store.commonStore.setAppLoading(true);
      await this.getProduct(gtin);

      if (this.selectedProduct?.gtin !== gtin) {
        this.removeSelectedProduct();
        await this.getProduct(gtin);
      }
      store.commonStore.setAppLoading(false);
    };

    getProduct = async (gtin: string) => {
      let product = this.productRegistery.get(gtin);

      if (product) {
        runInAction(() => {
          this.selectedProduct = product;
        });

        return product;
      }

      store.commonStore.setAppLoading(true);

      product = await agent.Products.details(gtin);
      this.setProduct(product);

      runInAction(() => {
        this.selectedProduct = product;
      });

      store.commonStore.setAppLoading(false);

      return product;
    };

    removeSelectedProduct = () => {
      this.selectedProduct = undefined;
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
