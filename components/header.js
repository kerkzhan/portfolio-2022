import React from "react";

const Header = () => {
  const navLinks = [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Work",
      link: "/work",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <nav className="kp-layout-header kp-header">
      <div>LOGO</div>
    </nav>
  );
};

export default Header;
