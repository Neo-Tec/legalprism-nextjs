import { getPageData, getSettings } from "@cms/client";
import Link from "next/link";

export default async function Contact() {
  // const settings = await getSettings();
  const about_page = await getPageData("about_page");

  console.log("about_page => ", about_page);

  // const phoneNumber = settings?.phone || "+91 6394735197";
  // const address =
  //   settings?.address ||
  //   "203 Fake St. Mountain View, San Francisco, California, USA";
  // const email = settings?.email || "blog.legalprism@gmail.com";

  return (
    <>
      <div>
        <section
          className="hero-wrap hero-wrap-2"
          style={{ backgroundImage: 'url("images/bg_5.jpg")' }}
          data-stellar-background-ratio="0.5"
        >
          <div className="overlay" />
          <div className="container">
            <div className="row no-gutters slider-text align-items-end justify-content-center">
              <div className="col-md-9 ftco-animate mb-5 text-center">
                <p className="breadcrumbs mb-0">
                  <span className="mr-2">
                    <a href="/">
                      Home <i className="fa fa-chevron-right" />
                    </a>
                  </span>
                  About{" "}
                  <span>
                    <i className="fa fa-chevron-right" />
                  </span>
                </p>
                <h1 className="mb-0 bread">{about_page?.title}</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="wrapper px-md-4">
                  {/* <div className="row mb-5">
                    <div className="col-md-3">
                      <div className="dbox w-100 text-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-map-marker" />
                        </div>
                        <div className="text">
                          <p>
                            <span>Address:</span> {address}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="dbox w-100 text-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-phone" />
                        </div>
                        <div className="text">
                          <p>
                            <span>Phone:</span>{" "}
                            <a href="tel://1234567920">{phoneNumber}</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="dbox w-100 text-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-paper-plane" />
                        </div>
                        <div className="text">
                          <p>
                            <span>Email:</span>{" "}
                            <a href="mailto:info@yoursite.com">{email}</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="row no-gutters">
                    <div className="col-md-7">
                      <div className="contact-wrap w-100 p-md-5 p-4">
                        <h3 className="mb-4">About Us</h3>
                        <form
                          method="POST"
                          id="contactForm"
                          name="contactForm"
                          className="contactForm"
                          action="https://formspree.io/f/xbjndgrv"
                        >
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="label" htmlFor="name">
                                  Full Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="name"
                                  id="name"
                                  placeholder="Name"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="label" htmlFor="email">
                                  Email Address
                                </label>
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  placeholder="Email"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <label className="label" htmlFor="subject">
                                  Subject
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="subject"
                                  id="subject"
                                  placeholder="Subject"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <label className="label" htmlFor="#">
                                  Message
                                </label>
                                <textarea
                                  name="message"
                                  className="form-control"
                                  id="message"
                                  cols={30}
                                  rows={4}
                                  placeholder="Message"
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <input
                                  type="submit"
                                  defaultValue="Send Message"
                                  className="btn btn-primary"
                                />
                                <div className="submitting" />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-5 order-md-first d-flex align-items-stretch">
                      <div id="map" className="map" />
                    </div>
                  </div> */}
                  <div className="heading-section">
                    <h2 className="mb-3">{about_page?.heading}</h2>
                    <p>{about_page?.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
