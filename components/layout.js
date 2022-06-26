import PropTypes from "prop-types";

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
