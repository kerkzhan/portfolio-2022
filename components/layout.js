import PropTypes from "prop-types";
import Image from "next/image";
import Sidebar from "./sidebar";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div className="kp-layout-default">
      <Header />

      <main className="kp-layout-content">
        <Sidebar />
        {children}
      </main>

      <footer className="kp-layout-footer">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
