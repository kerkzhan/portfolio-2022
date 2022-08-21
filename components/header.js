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
        <a>
          <div>
            <Image src="/blob.svg" alt="blob logo" height={50} width={50} />
            <p>Kerk Zhan</p>
          </div>
        </a>
      </Link>

      <div>
        <div className=" kp-layout-nav">
          {navLinks.map((link) => (
            <Link href={link.link}>
              <a>{link.name}</a>
            </Link>
          ))}
        </div>

        <a href="/resume.pdf" target="_blank">
          <button className="kp-btn-resume">
            <p>resume</p>
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Header;
