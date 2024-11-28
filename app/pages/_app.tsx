import { AppProvider } from '../context/AppContext';

export default function App({ Component, pageProps }: any) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}
