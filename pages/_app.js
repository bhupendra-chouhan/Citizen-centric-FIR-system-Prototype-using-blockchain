import "../styles/globals.css";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  // console.log("This is the chain id " + 11155111);
  return (
    <ThirdwebProvider
      activeChain={ChainId.Mumbai}
      clientId="2e1b8a95b85115e844b43d9fab72f970"
    >
      <Component {...pageProps} />
      <Toaster />
    </ThirdwebProvider>
  );
}

export default MyApp;
