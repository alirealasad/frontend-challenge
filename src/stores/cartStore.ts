import { makeAutoObservable, reaction } from "mobx";
import { Product } from "types/product";

class CartStore {
  cartRegistery: Map<number, Product> = process.browser
    ? new Map(JSON.parse(window.localStorage.getItem("cart") as string))
    : new Map();

  constructor() {
    makeAutoObservable(this);

    reaction(
      () => this.cartRegistery.entries(),
      (entries) => {
        if (entries) {
          window.localStorage.setItem(
            "cart",
            JSON.stringify(Array.from(entries))
          );
        } else {
          window.localStorage.removeItem("cart");
        }
      }
    );
  }

  get cart() {
    return Array.from(this.cartRegistery.values());
  }

  get cartTotal() {
    return parseInt(
      Array.from(this.cartRegistery.values())
        .reduce(
          (amount, product) => product.recommendedRetailPrice * product.quantity + amount,
          0
        )
        .toFixed(2)
    );
  }

  get cartTotalItems() {
    return Array.from(this.cartRegistery.values()).reduce(
      (total, product) => product.quantity + total,
      0
    );
  }

  addToCart = (product: Product) => {
    const item = this.cartRegistery.get(product.gtin);

    if (typeof item === "undefined") {
      this.cartRegistery.set(product.gtin, product);
    } else {
      item.quantity += 1;
      this.cartRegistery.set(item.gtin, item);
    }

    window.localStorage.setItem("cart", JSON.stringify(this.cartRegistery));
  };

  removeFromCart = (gtin: number) => {
    const item = this.cartRegistery.get(gtin);

    if (typeof item === "undefined") {
      alert("Item Not Found In Cart");
      return;
    }

    if (item.quantity > 1) {
      item.quantity -= 1;
      this.cartRegistery.set(item.gtin, item);
    } else {
      this.cartRegistery.delete(gtin);
    }
  };

  removeAllItems = (gtin: number) => {
    const item = this.cartRegistery.get(gtin);

    if (typeof item === "undefined") {
      alert("Item Not Found In Cart");
      return;
    }

    this.cartRegistery.delete(gtin);
  };

  clearCart = () => {
    this.cartRegistery.clear();
  };
}

export default CartStore;
