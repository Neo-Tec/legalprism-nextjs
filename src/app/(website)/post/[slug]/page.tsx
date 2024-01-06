import { getAllPostsSlugs, getLatestPost, getPostBySlug } from "@cms/client";
import { urlForImage } from "@cms/image";
import { PortableText } from "@cms/plugins/portabletext";
import { format, parseISO } from "date-fns";

import Image from "next/image";
import Script from "next/script";

export const revalidate = 30;

export async function generateStaticParams() {
  return await getAllPostsSlugs();
}

export async function generateMetadata({ params }: any) {
  const post = await getPostBySlug(params.slug);
  return { title: post.title };
}

function SidePost({ post, pathPrefix }: any) {
  const imageProps = post?.mainImage ? urlForImage(post.mainImage) : null;
  const publishDate = format(
    parseISO(post?.publishedAt || post._createdAt),
    "MMMM dd, yyyy"
  );
  const blogLink = `/${pathPrefix ? `${pathPrefix}/` : ""}${post.slug.current}`;

  return (
    <div className="block-21 mb-4 d-flex">
      <a
        className="blog-img mr-4"
        style={{ backgroundImage: `url("${imageProps?.src}")` }}
      />
      <div className="text">
        <h3 className="heading">
          <a href={blogLink}>{post.title}</a>
        </h3>
        <div className="meta">
          <div>
            <a href="#">
              <span className="fa fa-calendar mr-2" />
              {publishDate}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function EachBlog({ params }: any) {
  const post = await getPostBySlug(params.slug);
  const imageProps = post?.mainImage ? urlForImage(post?.mainImage) : null;

  const recent_posts = await getLatestPost({ limit: 2 });
  const tags = post?.categories?.map(
    (category: any) => category?.slug?.current
  );

  return (
    <>
      <section className="ftco-section ftco-degree-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 ">
              <h1 className=" mb-4 mt-2 text-center">{post.title}</h1>
              <div id="blog-content">
                {imageProps && (
                  <Image
                    src={imageProps}
                    alt={post.mainImage?.alt || "Thumbnail"}
                    loading="eager"
                    className="img-fluid mb-4"
                    quality={50}
                  />
                )}

                <PortableText value={post.body} />
              </div>
              <div className="tag-widget post-tag-container mb-5 mt-5">
                <div className="tagcloud">
                  {tags?.map((tag: any, index: number) => (
                    <a
                      key={`${tag}_${index}`}
                      href="#"
                      className="tag-cloud-link"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>
            </div>{" "}
            {/* .col-md-8 */}
            <div className="col-lg-4 sidebar pl-lg-5 ">
              <div className="sidebar-box ">
                <h3>Recent Blog</h3>
                {recent_posts.map((post: any) => (
                  <SidePost key={post._id} post={post} pathPrefix="post" />
                ))}
              </div>
              <div className="sidebar-box ">
                <h3>Tags</h3>
                <div className="tagcloud">
                  {tags.map((tag: any, index: number) => (
                    <a
                      key={`${tag}_${index}`}
                      href="#"
                      className="tag-cloud-link"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>
              <div className="sidebar-box ">
                <h3>Excerpt</h3>
                <p>{post.excerpt}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
