import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";
import Head from "next/head";
import CartPage from 'components/cart/CartPage';


interface CartProps {}


const Cart: React.FC<CartProps> = () =>{

  return (
    <>
    <Head>
      <title>Cart</title>
    </Head>
    <CartPage />
    </>
  );
}

export default observer(Cart);
