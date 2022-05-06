export default {
  name: "heroContent",
  type: "document",
  title: "Hero Content",
  fields: [
    {
      name: "nameBanner",
      type: "string",
      title: "Name Banner",
    },
    {
      name: "techStack",
      type: "array",
      title: "Tech Stack (List)",
      of: [{ type: "string" }],
    },
    {
      name: "introParagraph",
      type: "string",
      title: "Intro Paragraph",
    },
  ],
};
