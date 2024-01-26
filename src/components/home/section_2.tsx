export function Section2() {
  return (
    <>
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
    </>
  );
}
