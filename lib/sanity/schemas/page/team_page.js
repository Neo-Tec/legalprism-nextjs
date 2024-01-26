import { defineField, defineType } from "sanity";

import { PackageIcon } from "@sanity/icons";

export const team_page = defineType({
  name: "team_page",
  type: "document",
  title: "Team Page",
  icon: PackageIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Page Title",
    }),
  ],
});
