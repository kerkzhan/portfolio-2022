import PropTypes from "prop-types";
import Image from "next/image";
import Sidebar from "./sidebar";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div className="kp-layout-default">
      <main className="kp-layout-content">{children}</main>
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
