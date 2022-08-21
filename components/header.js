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
      className={` ${
        !atTop && scrollDirection === "up" ? "shadow" : "hide"
      } kp-layout-header kp-header`}
    >
      <Link href={"/"}>
        <a>
          <div>
            <Image src="/blob.svg" height={50} width={50} />
            <p>Kerk Zhan</p>
          </div>
        </a>
      </Link>

      <div>
        <div className=" kp-layout-nav">
          <Link href={"/about"}>
            <a className="kp-nav-link">about</a>
          </Link>
          <Link href={"/work"} className="kp-nav-link">
            <a className="kp-nav-link">work</a>
          </Link>
          <Link href={"/contact"} className="kp-nav-link">
            <a className="kp-nav-link">contact</a>
          </Link>
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
