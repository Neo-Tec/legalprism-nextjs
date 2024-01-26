import { Contact } from "@/components/contact/contact";
import { Post } from "@/components/post/post";
import { Hero } from "@/components/home/hero";
import { Section2 } from "@/components/home/section_2";
import { Section3 } from "@/components/home/section_3";
import { BlogSection } from "@/components/home/blog_section";
import { getPageData } from "@cms/client";

export default async function Home() {
  const homepage_data = await getPageData("homepage");

  return (
    <div>
      {/* <Nav /> */}
      {/* END nav */}
      <Hero data={homepage_data} />
      <Section2 data={homepage_data} />
      <Section3 data={homepage_data} />
      <Contact data={homepage_data} />
      <BlogSection data={homepage_data} />
      {/* <Footer /> */}
      {/* loader */}
      <div id="ftco-loader" className="show fullscreen">
        <svg className="circular" width="48px" height="48px">
          <circle
            className="path-bg"
            cx={24}
            cy={24}
            r={22}
            fill="none"
            strokeWidth={4}
            stroke="#eeeeee"
          />
          <circle
            className="path"
            cx={24}
            cy={24}
            r={22}
            fill="none"
            strokeWidth={4}
            strokeMiterlimit={10}
            stroke="#F96D00"
          />
        </svg>
      </div>
    </div>
  );
}
