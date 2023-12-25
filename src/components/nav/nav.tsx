"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function Nav() {
  const pathname = usePathname();
  return (
    <>
      <div className="wrap">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <p className="mb-0 phone pl-md-2">
                <a href="#" className="mr-2">
                  <span className="fa fa-phone mr-1" /> +00 1234 567
                </a>
                <a href="#">
                  <span className="fa fa-paper-plane mr-1" />{" "}
                  youremail@email.com
                </a>
              </p>
            </div>
            <div className="col-md-6 d-flex justify-content-md-end">
              <div className="social-media">
                <p className="mb-0 d-flex">
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-facebook">
                      <i className="sr-only">Facebook</i>
                    </span>
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-twitter">
                      <i className="sr-only">Twitter</i>
                    </span>
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-instagram">
                      <i className="sr-only">Instagram</i>
                    </span>
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-dribbble">
                      <i className="sr-only">Dribbble</i>
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        id="ftco-navbar"
      >
        <div className="container">
          <a className="navbar-brand" href="index.html">
            Law Firm
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu" /> Menu
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item ${pathname === "/" ? "active" : ""}`}>
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li
                className={`nav-item ${pathname === "/about" ? "active" : ""}`}
              >
                <a href="about" className="nav-link">
                  About
                </a>
              </li>
              <li
                className={`nav-item ${
                  pathname === "/practice-area" ? "active" : ""
                }`}
              >
                <a href="practice-area" className="nav-link">
                  Practice Areas
                </a>
              </li>
              <li
                className={`nav-item ${pathname === "/blog" ? "active" : ""}`}
              >
                <a href="blog" className="nav-link">
                  Blog
                </a>
              </li>
              <li
                className={`nav-item ${
                  pathname === "/contact" ? "active" : ""
                }`}
              >
                <a href="contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
