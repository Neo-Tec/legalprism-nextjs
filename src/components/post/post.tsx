import { urlForImage } from "@cms/image";
import { format, parseISO } from "date-fns";

export function Post({ post, pathPrefix }: any) {
  const imageProps = post?.mainImage ? urlForImage(post.mainImage) : null;
  const publishDate = format(
    parseISO(post?.publishedAt || post._createdAt),
    "dd MMMM yyyy"
  ).split(" ");

  return (
    <div className="col-md-4 d-flex">
      <div className="blog-entry justify-content-end">
        <div className="text text-center">
          <a
            href={`/${pathPrefix ? `${pathPrefix}/` : ""}${post.slug.current}`}
            className="block-20 img d-flex align-items-center"
            style={{ backgroundImage: `url("${imageProps?.src}")` }}
          >
            <div className="meta text-center mb-2 d-flex align-items-center justify-content-center">
              <div>
                <span className="day">{publishDate[0]}</span>
                <span className="mos">{publishDate[1]}</span>
                <span className="yr">{publishDate[2]}</span>
              </div>
            </div>
          </a>
          <h3 className="heading mb-3">
            <a href="#">{post.title}</a>
          </h3>
          <p>{post.excerpt}</p>
        </div>
      </div>
    </div>
  );
}
