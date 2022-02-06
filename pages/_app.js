import Layout from "../components/Layout";
import "antd/dist/antd.css";
import "../styles/globals.css";
import "../styles/Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import { parseCookies } from "../lib/parseCookies";
function MyApp({ Component, pageProps }) {
  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
  );
}
MyApp.getInitialProps = async ({ ctx }) => {
  console.log(ctx.pathname);
  let pageProps = {};
  const cookie = parseCookies(ctx.req);
  pageProps = { user: cookie.user };
  return { pageProps };
};
export default MyApp;
