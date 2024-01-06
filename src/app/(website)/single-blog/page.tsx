import { getPostBySlug } from "@cms/client";
import { PortableText } from "@cms/plugins/portabletext";

export default async function EachBlog() {
  const post = await getPostBySlug(
    "10-simple-practices-that-will-help-you-get-1-better-every-day"
  );
  return (
    <>
      <section
        className="hero-wrap hero-wrap-2"
        style={{ backgroundImage: 'url("/images/bg_5.jpg")' }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay" />
        <div className="container">
          <div className="row no-gutters slider-text align-items-end justify-content-center">
            <div className="col-md-9 ftco-animate mb-5 text-center">
              <p className="breadcrumbs mb-0">
                <span className="mr-2">
                  <a href="index.html">
                    Home <i className="fa fa-chevron-right" />
                  </a>
                </span>{" "}
                <span className="mr-2">
                  <a href="index.html">
                    Blog <i className="fa fa-chevron-right" />
                  </a>
                </span>{" "}
                <span>
                  Blog Single <i className="fa fa-chevron-right" />
                </span>
              </p>
              <h1 className="mb-0 bread">Blog Details</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section ftco-degree-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 ftco-animate">
              <div id="blog-content">
                {"Hello" && <PortableText value={post.body} />}
              </div>
              <div className="tag-widget post-tag-container mb-5 mt-5">
                <div className="tagcloud">
                  <a href="#" className="tag-cloud-link">
                    Life
                  </a>
                  <a href="#" className="tag-cloud-link">
                    Sport
                  </a>
                  <a href="#" className="tag-cloud-link">
                    Tech
                  </a>
                  <a href="#" className="tag-cloud-link">
                    Travel
                  </a>
                </div>
              </div>
            </div>{" "}
            {/* .col-md-8 */}
            <div className="col-lg-4 sidebar pl-lg-5 ftco-animate">
              <div className="sidebar-box">
                <form action="#" className="search-form">
                  <div className="form-group">
                    <span className="fa fa-search" />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type a keyword and hit enter"
                    />
                  </div>
                </form>
              </div>
              <div className="sidebar-box ftco-animate">
                <h3>Recent Blog</h3>
                <div className="block-21 mb-4 d-flex">
                  <a
                    className="blog-img mr-4"
                    style={{ backgroundImage: "url(images/image_1.jpg)" }}
                  />
                  <div className="text">
                    <h3 className="heading">
                      <a href="#">
                        Even the all-powerful Pointing has no control about the
                        blind texts
                      </a>
                    </h3>
                    <div className="meta">
                      <div>
                        <a href="#">
                          <span className="fa fa-calendar" /> Jun 02, 2020
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="fa fa-user" /> Admin
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="fa fa-comment" /> 19
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block-21 mb-4 d-flex">
                  <a
                    className="blog-img mr-4"
                    style={{ backgroundImage: "url(images/image_2.jpg)" }}
                  />
                  <div className="text">
                    <h3 className="heading">
                      <a href="#">
                        Even the all-powerful Pointing has no control about the
                        blind texts
                      </a>
                    </h3>
                    <div className="meta">
                      <div>
                        <a href="#">
                          <span className="fa fa-calendar" /> Jun 02, 2020
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="fa fa-user" /> Admin
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="fa fa-comment" /> 19
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block-21 mb-4 d-flex">
                  <a
                    className="blog-img mr-4"
                    style={{ backgroundImage: "url(images/image_3.jpg)" }}
                  />
                  <div className="text">
                    <h3 className="heading">
                      <a href="#">
                        Even the all-powerful Pointing has no control about the
                        blind texts
                      </a>
                    </h3>
                    <div className="meta">
                      <div>
                        <a href="#">
                          <span className="fa fa-calendar" /> Jun 02, 2020
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="fa fa-user" /> Admin
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="fa fa-comment" /> 19
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sidebar-box ftco-animate">
                <h3>Tag Cloud</h3>
                <div className="tagcloud">
                  <a href="#" className="tag-cloud-link">
                    law
                  </a>
                  <a href="#" className="tag-cloud-link">
                    justice
                  </a>
                  <a href="#" className="tag-cloud-link">
                    judicial
                  </a>
                  <a href="#" className="tag-cloud-link">
                    personal
                  </a>
                  <a href="#" className="tag-cloud-link">
                    business
                  </a>
                  <a href="#" className="tag-cloud-link">
                    estate
                  </a>
                  <a href="#" className="tag-cloud-link">
                    house
                  </a>
                  <a href="#" className="tag-cloud-link">
                    atty
                  </a>
                </div>
              </div>
              <div className="sidebar-box ftco-animate">
                <h3>Paragraph</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus itaque, autem necessitatibus voluptate quod mollitia
                  delectus aut, sunt placeat nam vero culpa sapiente consectetur
                  similique, inventore eos fugit cupiditate numquam!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
