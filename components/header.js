import React from "react";
import Image from "next/image";
import Link from "next/link";
import useScrollDirection from "../hooks/useScrollDirection";
import useAtTopOfScreen from "../hooks/useAtTopOfScreen";

const Header = () => {
  const scrollDirection = useScrollDirection();
  const atTop = useAtTopOfScreen();
  const navLinks = [
    {
      name: "about",
      link: "/about",
    },
    {
      name: "work",
      link: "/work",
    },
    {
      name: "contact",
      link: "/contact",
    },
  ];

  return (
    <nav
      className={` ${
        !atTop && scrollDirection === "up" ? "shadow" : "hide"
      } kp-layout-header kp-header`}
    >
      <Link href={"/"}>
        <div>
          <Image src="/blob.svg" alt="blob logo" height={50} width={50} />
          <p>Kerk Zhan</p>
        </div>
      </Link>

      <div>
        <div className=" kp-layout-nav">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.link}>
              {link.name}
            </Link>
          ))}
        </div>

        <a href="/resume.pdf" target="_blank" className="kp-btn-resume">
          resume
        </a>
      </div>
    </nav>
  );
};

export default Header;
