import { Post } from "@/components/post/post";
import { getPaginatedPosts } from "@cms/client";

export const dynamic = "force-dynamic";

export const runtime = "edge";

export default async function Blog({ searchParams }: any) {
  // Fetch the current page from the query parameters, defaulting to 1 if it doesn't exist
  const page = searchParams.page;
  const pageIndex = parseInt(page, 10) || 1;

  // Set the number of posts to be displayed per page
  const POSTS_PER_PAGE = 6;

  // Define the parameters for fetching posts based on the current page
  const params = {
    pageIndex: (pageIndex - 1) * POSTS_PER_PAGE,
    limit: pageIndex * POSTS_PER_PAGE,
  };

  const posts = await getPaginatedPosts(params);

  // Check if the current page is the first or the last
  const isFirstPage = pageIndex < 2;
  const isLastPage = posts.length < POSTS_PER_PAGE;

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
                    <a href="index.html">
                      Home <i className="fa fa-chevron-right" />
                    </a>
                  </span>
                  Blog{" "}
                  <span>
                    <i className="fa fa-chevron-right" />
                  </span>
                </p>
                <h1 className="mb-0 bread">Our Blog</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section">
          <div className="container">
            <div className="row d-flex">
              {posts.map((post: any) => (
                <Post key={post._id} post={post} />
              ))}
            </div>
            {/* <div className="row mt-5">
              <div className="col text-center">
                <div className="block-27">
                  <ul>
                    <li>
                      <a href="#">&lt;</a>
                    </li>
                    <li className="active">
                      <span>1</span>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">4</a>
                    </li>
                    <li>
                      <a href="#">5</a>
                    </li>
                    <li>
                      <a href="#">&gt;</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
        </section>
      </div>
    </>
  );
}
