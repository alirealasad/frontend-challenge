import Layout from '../../components/Layout';
import { observer } from "mobx-react-lite";
import { useStore } from "../../stores/store";

function CartPage() {
    const {cart, cartTotal, clearCart, cartTotalItems,addToCart,removeFromCart,removeAllItems} = useStore().cartStore;

  return (
    <Layout>
      <h1>cart</h1>
      <button onClick={() => {clearCart()}}>clear</button>
      <h1>{cartTotal}</h1>
      <h1>{cartTotalItems}</h1>
      {cart.map(item => {
        return <pre><button onClick={() => {removeFromCart(item.gtin)}}>minus</button><button onClick={() => {addToCart(item)}}>plus</button><button onClick={() => {removeAllItems(item.gtin)}}>remove</button>{JSON.stringify(item)}</pre>
      }
      )}
    </Layout>
  );
}

export default observer(CartPage);
