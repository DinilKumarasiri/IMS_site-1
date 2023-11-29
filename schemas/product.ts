import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  type: "document",
  title: "product",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Title",
      type: "image",
    }),
  ],
});
