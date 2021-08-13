import type { AppProps } from "next/app";
import DefaultLayout from "components/layouts/DefaultLayout";
import AppLayout from "components/layouts/AppLayout";
import { store, StoreContext } from "../stores/store";
import Navbar from "components/navbar/Navbar";

import "styles/global.css";

const QogitaApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <StoreContext.Provider value={store}>
    <DefaultLayout>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </DefaultLayout>
  </StoreContext.Provider>
);

export default QogitaApp;
