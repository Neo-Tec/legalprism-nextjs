// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    // {
    //   name: "color",
    //   title: "Color",
    //   type: "string",
    //   description: "Color of the category",
    //   options: {
    //     list: [
    //       { title: "Green", value: "green" },
    //       { title: "Blue", value: "blue" },
    //       { title: "Purple", value: "purple" },
    //       { title: "Orange", value: "orange" },
    //     ],
    //   },
    // },
    // {
    //   name: "description",
    //   title: "Description",
    //   type: "text",
    // },
  ],
};
