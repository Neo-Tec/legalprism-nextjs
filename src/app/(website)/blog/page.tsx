import Pagination from "@/components/pagination/pagination";
import { Post } from "@/components/post/post";
import { SearchBar } from "@/components/search-bar/search-bar";
import {
  client,
  getAllCategories,
  getPaginatedPosts,
  getPaginatedSearchQuery,
} from "@cms/client";

interface SearchFilter {
  pageIndex: number;
  limit: number;
  query?: string;
  category?: string;
}

async function getPosts(filter: SearchFilter) {
  const query = `
  *[_type == "post"  ${filter.query ? "&& _score > 0" : ""} ${
    filter.category
      ? `&& "${filter.category}" in categories[]->slug.current`
      : ""
  } ]
    ${
      filter.query
        ? `| score(title match "${filter.query}" || excerpt match "${filter.query}" || pt::text(body) match "${filter.query}")
    | order(_score desc)`
        : `| order(publishedAt desc, _createdAt desc)`
    }
    [${filter.pageIndex}...${filter.limit}]
    {
      _score,
      _id,
      _createdAt,
      mainImage,
      categories[]->,
      title,
      slug
    }
  `;

  if (client) {
    return await client.fetch(query);
  }

  return [];
}

export default async function Blog({ searchParams }: any) {
  // Fetch the current page from the query parameters, defaulting to 1 if it doesn't exist
  const page = searchParams.page;
  const query = searchParams.query;
  const category = searchParams.category;
  const pageIndex = parseInt(page, 10) || 1;

  // Set the number of posts to be displayed per page
  const POSTS_PER_PAGE = 6;

  // Define the parameters for fetching posts based on the current page
  const params = {
    pageIndex: (pageIndex - 1) * POSTS_PER_PAGE,
    limit: pageIndex * POSTS_PER_PAGE,
  };

  // const posts = query
  //   ? await getPaginatedSearchQuery(params, query)
  //   : await getPaginatedPosts(params);

  const posts = await getPosts({ ...params, query, category });

  // Check if the current page is the first or the last
  const isFirstPage = pageIndex < 2;
  const isLastPage = posts.length < POSTS_PER_PAGE;

  const categories = await getAllCategories();

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
            <SearchBar
              query={query}
              categories={categories}
              currentCategory={category}
            />
            <div className="row d-flex ">
              {posts.map((post: any) => (
                <Post key={post._id} post={post} />
              ))}
            </div>
            <div>
              <Pagination
                pageIndex={pageIndex}
                isFirstPage={isFirstPage}
                isLastPage={isLastPage}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
