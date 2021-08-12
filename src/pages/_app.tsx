import type { AppProps } from 'next/app';
import { store, StoreContext } from "../stores/store";

import '../global.css';

const QogitaApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <StoreContext.Provider value={store}>
  <Component {...pageProps} />
  </StoreContext.Provider>
);

export default QogitaApp;
