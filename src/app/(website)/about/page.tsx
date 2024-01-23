import { getAllLawyers } from "@cms/client";
import { urlForImage } from "@cms/image";

export default async function About() {
  const lawyers = await getAllLawyers();

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
                  About
                  <span>
                    <i className="fa fa-chevron-right" />
                  </span>
                </p>
                <h1 className="mb-0 bread">Our Qualified Lawyer</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section">
          <div className="container">
            <div className="row">
              {lawyers.map((lawyer: any, index: number) => {
                const imageProps = lawyer?.image
                  ? urlForImage(lawyer?.image)
                  : null;

                const socials: any = {};
                lawyer?.social?.forEach((social: any) => {
                  socials[social.media as string] = social.url;
                });

                return (
                  <div key={index} className="col-md-6 col-lg-3 ftco-animate">
                    <div className="staff">
                      <div className="img-wrap d-flex align-items-stretch">
                        <div
                          className="img align-self-stretch"
                          style={{
                            backgroundImage: `url("${imageProps?.src}")`,
                          }}
                        />
                      </div>
                      <div className="text pt-3 text-center">
                        <h3>{lawyer?.name}</h3>
                        <span className="position mb-2">
                          {lawyer?.job_title}
                        </span>
                        <div className="faded">
                          <p>{lawyer?.bio}</p>
                          <ul className="ftco-social text-center">
                            <li className="ftco-animate">
                              <a
                                href={`${socials.twitter}` || "#"}
                                className="d-flex align-items-center justify-content-center"
                              >
                                <span className="fa fa-twitter" />
                              </a>
                            </li>
                            <li className="ftco-animate">
                              <a
                                href={socials.facebook || "#"}
                                className="d-flex align-items-center justify-content-center"
                              >
                                <span className="fa fa-facebook" />
                              </a>
                            </li>
                            <li className="ftco-animate">
                              <a
                                href={socials.linkedin || "#"}
                                className="d-flex align-items-center justify-content-center"
                              >
                                <span className="fa fa-linkedin" />
                              </a>
                            </li>
                            <li className="ftco-animate">
                              <a
                                href={socials.instagram || "#"}
                                className="d-flex align-items-center justify-content-center"
                              >
                                <span className="fa fa-instagram" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
