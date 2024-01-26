"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

export function Nav({ settings }: { settings: any }) {
  const pathname = usePathname();

  const twitterUrl =
    settings?.social.find((social: any) => social.media === "twitter")?.url ||
    ``;
  const facebookUrl =
    settings?.social.find((social: any) => social.media === "facebook")?.url ||
    ``;
  const instagramUrl =
    settings?.social.find((social: any) => social.media === "instagram")?.url ||
    ``;

  const phoneNumber = settings?.phone || "+91 6394735197";
  const address =
    settings?.address ||
    "203 Fake St. Mountain View, San Francisco, California, USA";
  const email = settings?.email || "blog.legalprism@gmail.com";

  return (
    <>
      <div className="wrap">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <p className="mb-0 phone pl-md-2">
                <a href="#" className="mr-2">
                  <span className="fa fa-phone mr-1" /> {phoneNumber}
                </a>
                <a href="#">
                  <span className="fa fa-paper-plane mr-1" /> {email}
                </a>
              </p>
            </div>
            <div className="col-md-6 d-flex justify-content-md-end">
              <div className="social-media">
                <p className="mb-0 d-flex">
                  <a
                    href={facebookUrl}
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-facebook">
                      <i className="sr-only">Facebook</i>
                    </span>
                  </a>
                  <a
                    href={twitterUrl}
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-twitter">
                      <i className="sr-only">Twitter</i>
                    </span>
                  </a>
                  <a
                    href={instagramUrl}
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
          <a href="/">
            <Image
              alt="Legal Prism Logo"
              src="/logo.png"
              height={30}
              width={30}
              className="mr-2"
            />
          </a>
          <a className="navbar-brand" href="/">
            LegalPrism
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

              {/* <li
                className={`nav-item ${
                  pathname === "/practice-area" ? "active" : ""
                }`}
              >
                <a href="/practice-area" className="nav-link">
                  Practice Areas
                </a>
              </li> */}
              <li
                className={`nav-item ${pathname === "/blog" ? "active" : ""}`}
              >
                <a href="/blog" className="nav-link">
                  Blog
                </a>
              </li>
              <li
                className={`nav-item ${pathname === "/team" ? "active" : ""}`}
              >
                <a href="/team" className="nav-link">
                  Team
                </a>
              </li>
              <li
                className={`nav-item ${pathname === "/about" ? "active" : ""}`}
              >
                <a href="/about" className="nav-link">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
