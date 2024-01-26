const icons_list = ["flaticon-medal", "flaticon-auction", "flaticon-lawyer"];

export function Contact({ data }: { data: any }) {
  return (
    <section
      className="ftco-appointment ftco-section img"
      style={{ backgroundImage: "url(images/bg_2.jpg)" }}
      id="contact-section"
    >
      <div className="overlay" />
      <div className="container">
        <div className="row">
          <div className="col-md-6 pr-md-5">
            <div className="heading-section heading-section-white">
              <h2 className="mb-3">{data?.section_4_heading || "Heading"}</h2>
              <p>{data?.section_4_description || "Description"}</p>
              <div className="row mt-md-4">
                {data?.section_4_points?.map((data_: any, index: number) => {
                  return (
                    <div key={index} className="col-lg-6">
                      <div className="services d-flex w-100">
                        <div className="icon icon-2 d-flex align-items-center justify-content-center">
                          <span className={icons_list[index]} />
                        </div>
                        <div className="text pl-3">
                          <h2>{data_?.title}</h2>
                          <p>{data_?.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-md-6 half ftco-animate">
            <h2 className="mb-4">{data?.section_4_formname}</h2>
            <form
              name="Contact Me"
              className="appointment"
              action="https://formspree.io/f/xbjndgrv"
              method="POST"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      name="Name"
                      required={true}
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      name="Email"
                      required={true}
                      type="text"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <div className="form-field">
                      <div className="select-wrap">
                        <div className="icon">
                          <span className="fa fa-chevron-down" />
                        </div>
                        <select
                          name={"Law Type"}
                          id={""}
                          required={false}
                          className="form-control"
                        >
                          <option value={""}>Practice Areas</option>
                          {data?.practice_areas?.map(
                            (area: any, index: number) => {
                              return (
                                <option key={index} value={area}>
                                  {area}
                                </option>
                              );
                            }
                          )}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      name="Message"
                      required={true}
                      id=""
                      cols={30}
                      rows={7}
                      className="form-control"
                      placeholder="Message"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="submit"
                      defaultValue="Send message"
                      className="btn btn-primary py-3 px-4"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
