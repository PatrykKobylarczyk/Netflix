import { RecoilRoot } from "recoil";
import { AuthProvider } from "../hooks/useAuth";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </RecoilRoot> 
  );
}

export default MyApp;
