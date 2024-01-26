const icons_list = [
  "flaticon-lawyer",
  "flaticon-discount",
  "flaticon-auction",
  "flaticon-handcuffs",
];

export function Section2({ data }: { data: any }) {
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
                  href={
                    data?.video_link ||
                    "https://youtu.be/h5D-C4Wxs0c?si=yG2MFPjSZ879JSwB"
                  }
                  className="play-video popup-vimeo d-flex align-items-center justify-content-center"
                >
                  <span className="fa fa-play" />
                </a>
              </div>
            </div>
            <div className="col-md-6 wrap-about ftco-animate">
              <div className="bg-light px-3 px-md-5 py-5 ">
                <div className="heading-section">
                  <span className="subheading">
                    {data?.small_heading || "Sub Heading"}
                  </span>
                  <h2 className="mb-3">{data?.big_heading || "Big Heading"}</h2>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
                <div className="row">
                  {data?.section_2_points?.map((data: any, index: number) => {
                    return (
                      <div key={index} className="col-lg-6">
                        <div className="services d-flex w-100">
                          <div className="icon d-flex align-items-center justify-content-center">
                            <span className={icons_list[index]} />
                          </div>
                          <div className="text pl-2">
                            <h2>{data?.title || "Title"}</h2>
                            <p>{data?.description || "Description"}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* <div className="col-lg-6">
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
                  </div> */}
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
            {data?.section_2_points_numbers?.map(
              (data_: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="col-md-6 col-lg-3 d-flex align-items-stretch counter-wrap ftco-animate"
                  >
                    <div className="block-18 py-4 w-100">
                      <span className="icon flaticon-checklist" />
                      <div className="text align-items-center">
                        <strong className="number" data-number={3000}>
                          {data_?.count}
                        </strong>
                        <span>{data_?.title}</span>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>
    </>
  );
}
