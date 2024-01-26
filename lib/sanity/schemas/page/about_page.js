import { defineField, defineType } from "sanity";

import { PackageIcon } from "@sanity/icons";

export const about_page = defineType({
  name: "about_page",
  type: "document",
  title: "About Page",
  icon: PackageIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Page Title",
    }),
    defineField({
      name: "heading",
      type: "string",
      title: "Page Heading",
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Page Description",
    }),
  ],
});
