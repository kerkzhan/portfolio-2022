import React from "react";
import Image from "next/image";
import useScrollDirection from "../hooks/useScrollDirection";

const Header = () => {
  const scrollDirection = useScrollDirection();
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
    <nav
      className={`${
        scrollDirection === "down" ? "hide" : "show"
      } kp-layout-header kp-header`}
    >
      <div>
        <Image src="/blob.svg" height={50} width={50} />
        <p>Kerk Zhan</p>
      </div>
      <button className="kp-btn-resume">resume</button>
    </nav>
  );
};

export default Header;
