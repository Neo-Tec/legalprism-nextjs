export function Hero() {
  return (
    <div
      className="hero-wrap"
      style={{ backgroundImage: 'url("images/bg_3.jpg")' }}
      data-stellar-background-ratio="0.5"
    >
      <div className="overlay" />
      <div className="container">
        <div
          className="row no-gutters slider-text align-items-center"
          style={{ gap: "100px" }}
        >
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
                <a
                  href="#contact-section"
                  className="btn btn-primary py-3 px-4"
                >
                  Contact us
                </a>{" "}
                <a href="blog" className="btn btn-white py-3 px-4">
                  Read more
                </a>
              </p>
            </div>
          </div>
          <div
            //   href="https://vimeo.com/45830194"
            className="popup-vimeo d-flex align-items-center justify-content-center"
          >
            <img src="/logo.png" width={"350px"} className="hero-image" />
            {/* <span className="fa fa-play" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
