import { defineField } from "sanity";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "lawyer",
  title: "Team",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "job_title",
      title: "Job Title",
      type: "string",
    },
    {
      name: "bio",
      title: "Bio",
      type: "string",
    },

    defineField({
      name: "social",
      type: "array",
      title: "Social Links",
      description: "Enter your Social Media URLs",
      validation: (Rule) => Rule.unique(),
      of: [
        {
          type: "object",
          fields: [
            {
              type: "string",
              name: "media",
              title: "Choose Social Media",
              options: {
                list: [
                  { title: "Twitter", value: "twitter" },
                  { title: "Facebook", value: "facebook" },
                  { title: "Instagram", value: "instagram" },
                  { title: "Linkedin", value: "linkedin" },
                  { title: "Youtube", value: "youtube" },
                ],
              },
            },
            {
              type: "url",
              name: "url",
              title: "Full Profile URL",
            },
          ],
          preview: {
            select: {
              title: "media",
              subtitle: "url",
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
