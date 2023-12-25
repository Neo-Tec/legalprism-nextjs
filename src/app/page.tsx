"use client";

import { Nav } from "@/components/nav/nav";
import { Footer } from "@/components/footer/footer";
import { Contact } from "@/components/contact/contact";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    console.log("Refresh Called");
    // setTimeout(() => {
    //   router.refresh();
    //   console.log("Refresh Called");
    // }, 1000);
  });

  return (
    <div>
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
      <Nav />
      {/* END nav */}
      <div
        className="hero-wrap"
        style={{ backgroundImage: 'url("images/bg_1.jpg")' }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay" />
        <div className="container">
          <div className="row no-gutters slider-text align-items-center">
            <div className="col-md-6 ftco-animate d-flex align-items-end">
              <div className="text w-100">
                <h1 className="mb-4">
                  Don&#39;t Feel Helpless We Fight for Justice
                </h1>
                <p className="mb-4">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
                <p>
                  <a href="#" className="btn btn-primary py-3 px-4">
                    Contact us
                  </a>{" "}
                  <a href="#" className="btn btn-white py-3 px-4">
                    Read more
                  </a>
                </p>
              </div>
            </div>
            <a
              href="https://vimeo.com/45830194"
              className="img-video popup-vimeo d-flex align-items-center justify-content-center"
            >
              <span className="fa fa-play" />
            </a>
          </div>
        </div>
      </div>
      <section className="ftco-intro">
        <div className="container-fluid">
          <div className="row no-gutters">
            <div className="col-md-3 d-flex">
              <div className="intro aside-stretch d-lg-flex w-100">
                <div className="icon">
                  <span className="flaticon-lawyer" />
                </div>
                <div className="text">
                  <h2>Expert Attorneys</h2>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="intro color-1 d-lg-flex w-100">
                <div className="icon">
                  <span className="flaticon-auction" />
                </div>
                <div className="text">
                  <h2>Case Dismissed</h2>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="intro color-2 d-lg-flex w-100">
                <div className="icon">
                  <span className="flaticon-court" />
                </div>
                <div className="text">
                  <h2>Court Performance</h2>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="intro color-3 d-lg-flex w-100">
                <div className="icon">
                  <span className="flaticon-court" />
                </div>
                <div className="text">
                  <h2>Court Performance</h2>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section ftco-no-pb ftco-no-pt">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-6 d-flex align-items-stretch">
              <div
                className="img img-3 w-100 d-flex justify-content-center align-items-center"
                style={{
                  backgroundImage: "url(images/about-1.jpg)",
                  position: "relative",
                }}
              >
                <a
                  href="https://vimeo.com/45830194"
                  className="play-video popup-vimeo d-flex align-items-center justify-content-center"
                >
                  <span className="fa fa-play" />
                </a>
              </div>
            </div>
            <div className="col-md-6 wrap-about ftco-animate">
              <div className="bg-light px-3 px-md-5 py-5 ">
                <div className="heading-section">
                  <span className="subheading">Welcome to Law Firm</span>
                  <h2 className="mb-3">
                    Why to Put Trust Your Trust In Law Firm
                  </h2>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="services d-flex w-100">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="flaticon-lawyer" />
                      </div>
                      <div className="text pl-2">
                        <h2>Expert Attorneys</h2>
                        <p>
                          A small river named Duden flows by their place and
                          supplies
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="services d-flex w-100">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="flaticon-discount" />
                      </div>
                      <div className="text pl-2">
                        <h2>Great Discount</h2>
                        <p>
                          A small river named Duden flows by their place and
                          supplies
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="services d-flex w-100">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="flaticon-auction" />
                      </div>
                      <div className="text pl-2">
                        <h2>Legal Advisory</h2>
                        <p>
                          A small river named Duden flows by their place and
                          supplies
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="services d-flex w-100">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="flaticon-handcuffs" />
                      </div>
                      <div className="text pl-2">
                        <h2>Quick Charges</h2>
                        <p>
                          A small river named Duden flows by their place and
                          supplies
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="ftco-counter ftco-section ftco-no-pt mt-4 ftco-no-pb img"
        id="section-counter"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch counter-wrap ftco-animate">
              <div className="block-18 py-4 w-100">
                <span className="icon flaticon-checklist" />
                <div className="text align-items-center">
                  <strong className="number" data-number={3000}>
                    0
                  </strong>
                  <span>Trusted Clients</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch counter-wrap ftco-animate">
              <div className="block-18 py-4 w-100">
                <span className="icon flaticon-checklist" />
                <div className="text align-items-center">
                  <strong className="number" data-number={1000}>
                    0
                  </strong>
                  <span>Honor&#39;s &#39; Awards</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch counter-wrap ftco-animate">
              <div className="block-18 py-4 w-100">
                <span className="icon flaticon-checklist" />
                <div className="text align-items-center">
                  <strong className="number" data-number={2000}>
                    0
                  </strong>
                  <span>Expert Lawyers</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch counter-wrap ftco-animate">
              <div className="block-18 py-4 w-100">
                <span className="icon flaticon-checklist" />
                <div className="text align-items-center">
                  <strong className="number" data-number={10540}>
                    0
                  </strong>
                  <span>Successful Cases</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center pb-5">
            <div className="col-md-7 heading-section text-center ftco-animate">
              <span className="subheading">Practice Area</span>
              <h2>What We Cover</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 d-flex align-items-stretch ftco-animate">
              <div className="services-2 text-center">
                <div className="icon-wrap">
                  <div className="mini-icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-stats" />
                  </div>
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-stats" />
                  </div>
                </div>
                <h2>Business Law</h2>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-stretch ftco-animate">
              <div className="services-2 text-center">
                <div className="icon-wrap">
                  <div className="mini-icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-family" />
                  </div>
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-family" />
                  </div>
                </div>
                <h2>Family Law</h2>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-stretch ftco-animate">
              <div className="services-2 text-center">
                <div className="icon-wrap">
                  <div className="mini-icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-handcuffs" />
                  </div>
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-handcuffs" />
                  </div>
                </div>
                <h2>Criminal Law</h2>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-stretch ftco-animate">
              <div className="services-2 text-center">
                <div className="icon-wrap">
                  <div className="mini-icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-stay-home" />
                  </div>
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-stay-home" />
                  </div>
                </div>
                <h2>Real Estate Law</h2>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-stretch ftco-animate">
              <div className="services-2 text-center">
                <div className="icon-wrap">
                  <div className="mini-icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-injury" />
                  </div>
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-injury" />
                  </div>
                </div>
                <h2>Personal Injury</h2>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-stretch ftco-animate">
              <div className="services-2 text-center">
                <div className="icon-wrap">
                  <div className="mini-icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-auction" />
                  </div>
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-auction" />
                  </div>
                </div>
                <h2>Judicial Law</h2>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section testimony-section">
        <div
          className="img img-bg"
          style={{ backgroundImage: "url(images/bg_4.jpg)" }}
        />
        <div className="overlay" />
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
              <span className="subheading">Testimonial</span>
              <h2 className="mb-3">Happy Clients</h2>
            </div>
          </div>
          <div className="row ftco-animate">
            <div className="col-md-12">
              <div className="carousel-testimony owl-carousel ftco-owl">
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-quote-left" />
                    </div>
                    <div className="text">
                      <p className="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img"
                          style={{
                            backgroundImage: "url(images/person_1.jpg)",
                          }}
                        />
                        <div className="pl-3">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-quote-left" />
                    </div>
                    <div className="text">
                      <p className="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img"
                          style={{
                            backgroundImage: "url(images/person_2.jpg)",
                          }}
                        />
                        <div className="pl-3">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-quote-left" />
                    </div>
                    <div className="text">
                      <p className="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img"
                          style={{
                            backgroundImage: "url(images/person_3.jpg)",
                          }}
                        />
                        <div className="pl-3">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-quote-left" />
                    </div>
                    <div className="text">
                      <p className="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img"
                          style={{
                            backgroundImage: "url(images/person_1.jpg)",
                          }}
                        />
                        <div className="pl-3">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-quote-left" />
                    </div>
                    <div className="text">
                      <p className="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img"
                          style={{
                            backgroundImage: "url(images/person_2.jpg)",
                          }}
                        />
                        <div className="pl-3">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-7 heading-section text-center ftco-animate">
              <span className="subheading">Blog</span>
              <h2>Recent Blog</h2>
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-md-4 d-flex ftco-animate">
              <div className="blog-entry justify-content-end">
                <div className="text text-center">
                  <a
                    href="blog-single.html"
                    className="block-20 img d-flex align-items-center"
                    style={{ backgroundImage: 'url("images/image_1.jpg")' }}
                  >
                    <div className="meta text-center mb-2 d-flex align-items-center justify-content-center">
                      <div>
                        <span className="day">02</span>
                        <span className="mos">June</span>
                        <span className="yr">2020</span>
                      </div>
                    </div>
                  </a>
                  <h3 className="heading mb-3">
                    <a href="#">Social Media Risks To Mental Health</a>
                  </h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex ftco-animate">
              <div className="blog-entry justify-content-end">
                <div className="text text-center">
                  <a
                    href="blog-single.html"
                    className="block-20 img d-flex align-items-center"
                    style={{ backgroundImage: 'url("images/image_2.jpg")' }}
                  >
                    <div className="meta text-center mb-2 d-flex align-items-center justify-content-center">
                      <div>
                        <span className="day">02</span>
                        <span className="mos">June</span>
                        <span className="yr">2020</span>
                      </div>
                    </div>
                  </a>
                  <h3 className="heading mb-3">
                    <a href="#">Social Media Risks To Mental Health</a>
                  </h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex ftco-animate">
              <div className="blog-entry justify-content-end">
                <div className="text text-center">
                  <a
                    href="blog-single.html"
                    className="block-20 img d-flex align-items-center"
                    style={{ backgroundImage: 'url("images/image_3.jpg")' }}
                  >
                    <div className="meta text-center mb-2 d-flex align-items-center justify-content-center">
                      <div>
                        <span className="day">02</span>
                        <span className="mos">June</span>
                        <span className="yr">2020</span>
                      </div>
                    </div>
                  </a>
                  <h3 className="heading mb-3">
                    <a href="#">Social Media Risks To Mental Health</a>
                  </h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      {/* loader */}
      <div id="ftco-loader" className="show fullscreen">
        <svg className="circular" width="48px" height="48px">
          <circle
            className="path-bg"
            cx={24}
            cy={24}
            r={22}
            fill="none"
            strokeWidth={4}
            stroke="#eeeeee"
          />
          <circle
            className="path"
            cx={24}
            cy={24}
            r={22}
            fill="none"
            strokeWidth={4}
            strokeMiterlimit={10}
            stroke="#F96D00"
          />
        </svg>
      </div>
    </div>
  );
}
