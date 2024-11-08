import "@/styles/globals.css";
import "@/styles/fonts.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import ModalProvider from "./src/context/ModalProvider";
import CartContext from "./src/context/CartContext";

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        retry: 1,
        staleTime: 60 * 1000,
      },
    },
  });
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ModalProvider>
          <CartContext>
            <Component {...pageProps} />
          </CartContext>
        </ModalProvider>
      </QueryClientProvider>
    </>
  );
}
