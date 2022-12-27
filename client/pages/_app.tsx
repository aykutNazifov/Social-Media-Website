import "../styles/globals.css";
import ThemeContextProvider from "../context/ThemeContextProvider";
import AuthContextProvider from "../context/AuthContextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Component {...pageProps} />
        </ThemeContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
