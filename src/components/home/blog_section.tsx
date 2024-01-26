import { getLatestPost } from "@cms/client";
import { Post } from "@/components/post/post";

export async function BlogSection() {
  const recent_post = await getLatestPost({ limit: 2 });

  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <span className="subheading">Blog</span>
            <h2>Recent Blog</h2>
          </div>
        </div>
        <div className="row d-flex">
          {recent_post.map((post: any) => (
            <Post key={post._id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
