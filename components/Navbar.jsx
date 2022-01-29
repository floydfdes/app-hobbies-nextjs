import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navlogo from "../Assets/images/logo2.svg";
import NavFavlogo from "../Assets/images/Favicon.svg";
const Navbar = () => {
  let screenWidth = 0;
  useEffect(() => {
    var hamburger = document.querySelector(".hamburger");
    var navMenu = document.querySelector(".nav-menu");
    hamburger.addEventListener("click", mobileMenu);
    var navLink = document.querySelectorAll(".nav-link");

    navLink.forEach((n) => n.addEventListener("click", closeMenu));
    function mobileMenu() {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    }

    function closeMenu() {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }
  }, []);
  useEffect(() => {
    screenWidth = window.innerWidth;
    window.addEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function onResize() {
    screenWidth = window.innerWidth;
  }

  return (
    <div className="container">
      <header className="header">
        <nav className="navbar">
          <Link href="/" className="nav-logo">
            {screenWidth > 700 ? (
              <Image src={Navlogo} alt="" width={160} />
            ) : (
              <Image src={NavFavlogo} alt="" width={40} height={40} />
            )}
          </Link>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link href="/hobbies" className="nav-link">
                Hobbies
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/login" className="nav-link">
                Login
              </Link>
            </li>
          </ul>
          <div className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
