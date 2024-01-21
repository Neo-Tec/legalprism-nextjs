import { getSocials } from "@cms/client";

export async function Footer({ settings }: { settings: any }) {
  const twitterUrl =
    settings.social.find((social: any) => social.media === "twitter")?.url ||
    ``;
  const facebookUrl =
    settings.social.find((social: any) => social.media === "facebook")?.url ||
    ``;
  const instagramUrl =
    settings.social.find((social: any) => social.media === "instagram")?.url ||
    ``;

  const phoneNumber = settings?.phone || "+91 6394735197";
  const address =
    settings?.address ||
    "203 Fake St. Mountain View, San Francisco, California, USA";
  const email = settings?.email || "blog.legalprism@gmail.com";

  return (
    <footer className="ftco-footer">
      <div className="container">
        <div className="row mb-5">
          <div className="col-sm-12 col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2 logo">
                <a href="#">Law Firm</a>
              </h2>
              <p>
                Far far away, behind the word mountains, far from the countries.
              </p>
              <ul className="ftco-footer-social list-unstyled mt-2">
                <li className="ftco-animate">
                  <a href={twitterUrl}>
                    <span className="fa fa-twitter" />
                  </a>
                </li>
                <li className="ftco-animate">
                  <a href={facebookUrl}>
                    <span className="fa fa-facebook" />
                  </a>
                </li>
                <li className="ftco-animate">
                  <a href={instagramUrl}>
                    <span className="fa fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Explore</h2>
              <ul className="list-unstyled">
                <li>
                  <a href={`#`}>
                    <span className="fa fa-chevron-right mr-2" />
                    About
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-chevron-right mr-2" />
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-chevron-right mr-2" />
                    Practice Areas
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-chevron-right mr-2" />
                    Cases
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Legal</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="#">
                    <span className="fa fa-chevron-right mr-2" />
                    Join us
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-chevron-right mr-2" />
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-chevron-right mr-2" />
                    Privacy &amp; Policy
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-chevron-right mr-2" />
                    Term &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Company</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="#">
                    <span className="fa fa-chevron-right mr-2" />
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-chevron-right mr-2" />
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-chevron-right mr-2" />
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-chevron-right mr-2" />
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="icon fa fa-map marker" />
                    <span className="text">{address}</span>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon fa fa-phone" />
                      <span className="text">{phoneNumber}</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon fa fa-paper-plane pr-4" />
                      <span className="text">{email}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid px-0 py-5 bg-black">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="mb-0" style={{ color: "rgba(255,255,255,.5)" }}>
                This website is made by{" "}
                <a href="https://artaza.in" target="_blank">
                  CyberPlanet Agency
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
