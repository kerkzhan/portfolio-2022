import React from "react";

const Sidebar = () => {
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
    <nav className="kp-layout-sidebar kp-sidebar">
      <div className="kp-layout-content">
        <div>LOGO</div>

        <div className="kp-sidebar-buttons">
          {navLinks.map((link) => {
            return (
              <a href={link.link}>
                <p>{link.name}</p>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
