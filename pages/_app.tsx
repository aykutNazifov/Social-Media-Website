import "../styles/globals.css";
import ThemeContextProvider from "../context/ThemeContextProvider";
import AuthContextProvider from "../context/AuthContextProvider";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
