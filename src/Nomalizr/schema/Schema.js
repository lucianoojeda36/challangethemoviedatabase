import { schema } from "normalizr";

const user = new schema.Entity("users");

// Define your comments schema
const result = new schema.Entity("results", {
  results: user,
});

// Define your article
const article = new schema.Entity("articles", {
  author: user,
  resultss: [result],
});

export { article };
