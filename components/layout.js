import PropTypes from "prop-types";
import Header from "./header";
import Footer from "./footer";
import { Toaster } from "sonner";
const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <main>{children}</main>
      <Toaster />
      <Footer />
    </>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
