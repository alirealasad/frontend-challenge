import Layout from '../components/Layout';
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../stores/store";

function HomePage() {
  const { products, loadProducts  } = useStore().productStore;
  const {totalPage, currentPage, changePage} = useStore().pageStore;
  const {addToCart} = useStore().cartStore;

  useEffect(() => {
      loadProducts();
  }, [currentPage]);

  return (
    <Layout>
    <div>
      <button onClick={() => {changePage(currentPage-1)}}>minus</button>
      <button onClick={() => {changePage(currentPage+1)}}>add</button>
    </div>
    <h1>{currentPage}</h1>
    <h1>{totalPage}</h1>
    {products.map(product => {
      return <pre><button onClick={() => {addToCart(product)}}>addToCart</button>{JSON.stringify(product)}</pre>
    })}
    </Layout>
  );
}

export default observer(HomePage);
