import { PackageIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

const homepage = defineType({
  name: "homepage",
  type: "document",
  title: "Homepage",
  icon: PackageIcon,
  fieldsets: [
    {
      title: "Intro Section",
      name: "intro_section",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },

    {
      title: "Section-2",
      name: "section_2",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },

    {
      title: "What We Cover Section",
      name: "section_3",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },

    {
      title: "Contact Section",
      name: "section_4",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],

  fields: [
    // Intro Section
    defineField({
      title: "Intro Title",
      name: "intro_title",
      type: "string",
      fieldset: "intro_section",
    }),

    defineField({
      title: "Intro Description",
      name: "intro_description",
      type: "text",
      fieldset: "intro_section",
    }),

    // defineField({
    //   title: "Intro Points",
    //   name: "intro_points",
    //   type: "array",
    //   fieldset: "intro_section",
    //   of: [
    //     {
    //       type: "object",
    //       fields: [
    //         {
    //           title: "Title",
    //           name: "title",
    //           type: "string",
    //         },
    //         {
    //           title: "Description",
    //           name: "description",
    //           type: "string",
    //         },
    //       ],
    //       preview: {
    //         select: {
    //           title: "title",
    //         },
    //       },
    //     },
    //   ],
    // }),

    // Section 2
    defineField({
      title: "Small Heading",
      name: "small_heading",
      type: "string",
      fieldset: "section_2",
    }),
    defineField({
      title: "Big Heading",
      name: "big_heading",
      type: "string",
      fieldset: "section_2",
    }),
    defineField({
      title: "Description",
      name: "description_2",
      type: "text",
      fieldset: "section_2",
    }),
    defineField({
      title: "Video Link",
      name: "video_link",
      type: "url",
      fieldset: "section_2",
    }),
    defineField({
      title: "Text Points",
      name: "section_2_points",
      type: "array",
      validation: (Rule) => Rule.unique().min(0).max(4),
      fieldset: "section_2",
      of: [
        {
          type: "object",
          fields: [
            {
              title: "Title",
              name: "title",
              type: "string",
            },
            {
              title: "Description",
              name: "description",
              type: "string",
            },
          ],
          preview: {
            select: {
              title: "title",
            },
          },
        },
      ],
    }),

    defineField({
      title: "Number Points",
      name: "section_2_points_numbers",
      type: "array",
      validation: (Rule) => Rule.unique().min(0).max(4),
      fieldset: "section_2",
      of: [
        {
          type: "object",
          fields: [
            {
              title: "Title",
              name: "title",
              type: "string",
            },
            {
              title: "Count",
              name: "count",
              type: "number",
            },
          ],
          preview: {
            select: {
              title: "title",
            },
          },
        },
      ],
    }),

    // Section 3
    defineField({
      title: "Sub Heading",
      name: "section_3_subheading",
      type: "string",
      fieldset: "section_3",
    }),

    defineField({
      title: "Heading",
      name: "section_3_heading",
      type: "string",
      fieldset: "section_3",
    }),

    defineField({
      title: "Text Points",
      name: "section_3_points",
      type: "array",
      validation: (Rule) => Rule.unique().min(0).max(6),
      fieldset: "section_3",
      of: [
        {
          type: "object",
          fields: [
            {
              title: "Title",
              name: "title",
              type: "string",
            },
            {
              title: "Description",
              name: "description",
              type: "string",
            },
          ],
          preview: {
            select: {
              title: "title",
            },
          },
        },
      ],
    }),

    // Section 4
    defineField({
      title: "Heading",
      name: "section_4_heading",
      type: "string",
      fieldset: "section_4",
    }),
    defineField({
      title: "Description",
      name: "section_4_description",
      type: "text",
      fieldset: "section_4",
    }),
    defineField({
      title: "Text Points",
      name: "section_4_points",
      type: "array",
      validation: (Rule) => Rule.unique().min(0).max(6),
      fieldset: "section_4",
      of: [
        {
          type: "object",
          fields: [
            {
              title: "Title",
              name: "title",
              type: "string",
            },
            {
              title: "Description",
              name: "description",
              type: "string",
            },
          ],
          preview: {
            select: {
              title: "title",
            },
          },
        },
      ],
    }),
    defineField({
      title: "Contact Form Title",
      name: "section_4_formname",
      type: "string",
      fieldset: "section_4",
    }),

    defineField({
      title: "Contact From Practice Areas",
      name: "practice_areas",
      type: "array",
      validation: (Rule) => Rule.unique().min(0).max(6),
      fieldset: "section_4",
      of: [
        {
          title: "Practice Areas",
          type: "string",
        },
      ],
    }),
  ],
});

export default homepage;
