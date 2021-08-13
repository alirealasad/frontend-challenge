import Head from "next/head";
import Pagination from "components/pagination/Pagination";
import ProductFeed from "components/product/ProductFeed";
import { observer } from "mobx-react-lite"


function HomePage() {
  return (
    <>
      <Head>
        <title>qogita</title>
      </Head>
      <ProductFeed />
      </>
  );
}

export default observer(HomePage);
