import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navlogo from "../Assets/images/main_logo_1.svg";
import NavFavlogo from "../Assets/images/appicon.svg";
import Cookie from "js-cookie";
import { useRouter } from "next/router";
import Avatar from "react-avatar";

const Navbar = ({ currentUser }) => {
  const router = useRouter();
  useEffect(() => {
    var hamburger = document.querySelector(".hamburger");
    var navMenu = document.querySelector(".nav-menu");
    hamburger.addEventListener("click", mobileMenu);
    var navLink = document.querySelectorAll(".nav-item");

    navLink.forEach((n) => n.addEventListener("click", closeMenu));
    function mobileMenu() {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    }

    function closeMenu() {
      console.log("reaching here");
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }
  }, []);
  const logout = () => {
    console.log("works");
    Cookie.remove("user");
    router.push("/");
  };

  return (
    <div className="container">
      <header className="header">
        <nav className="navbar">
          <span className="d-none d-sm-block nav-logo">
            <Link href="/">
              <Image src={Navlogo} alt="" width={160} />
            </Link>
          </span>
          <span className="d-block d-sm-none nav-logo">
            <Link href="/">
              <Image src={NavFavlogo} alt="" width={40} height={40} />
            </Link>
          </span>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link href="/hobbies" className="nav-link">
                Posts
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/hobbies" className="nav-link">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              {currentUser ? (
                <>
                  <Avatar
                    name={JSON.parse(currentUser).firstName}
                    size="24"
                    round={true}
                  />
                  <a className="mx-1" onClick={logout}>
                    Logout
                  </a>
                </>
              ) : (
                <Link href="/login" className="nav-link">
                  Login
                </Link>
              )}
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
