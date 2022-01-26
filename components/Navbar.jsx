import React, { useEffect } from "react";
import Link from "next/link";
const Navbar = () => {
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

  return (
    <div className="container">
      <header className="header">
        <nav className="navbar">
          <Link href="/" className="nav-logo">
            Logo
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
