import "../css/kp.css";
import Layout from "../components/layout";
import "@fontsource/rubik";
import "@fontsource/roboto-mono";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
